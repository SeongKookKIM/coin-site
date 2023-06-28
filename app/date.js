"use client";

import { useEffect, useState } from "react";

export default function Date() {
  let [latitude, setLatitude] = useState("");
  let [longitude, setLongitude] = useState("");
  let [weather, setWeather] = useState({});
  let [icon, setIcon] = useState("");
  let [isLoading, setIsLoading] = useState(true);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      setLatitude(lat);
      setLongitude(lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=904ccd662ecc191d3296c2a1bbd98138&units=metric`;
    let res = await fetch(url);
    let data = await res.json();
    setWeather(data);
    setIcon(data.weather[0].icon);
    setIsLoading(false);

    // console.log(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      setTimeout(() => {
        getWeatherByCurrentLocation(latitude, longitude);
      }, 100);
    }
  }, [latitude]);

  //   console.log(weather);

  return (
    <div className="weather">
      {isLoading ? (
        <p>로딩중..</p>
      ) : (
        <>
          <h3>{weather.name}</h3>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
          <div>
            <p>{weather.weather[0].main}</p>
            <p>습도:{weather.main.humidity}</p>
          </div>
          <div>
            {" "}
            <p>현재온도:{weather.main.temp}℃</p>
            <p>체감온도:{weather.main.feels_like}℃</p>
          </div>
          <div>
            <p>최고온도:{weather.main.temp_max}℃</p>
            <p>최저온도:{weather.main.temp_min}℃</p>
          </div>
        </>
      )}
    </div>
  );
}
