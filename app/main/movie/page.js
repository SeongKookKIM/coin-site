"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Movie() {
  let [movie, setMovie] = useState();

  useEffect(() => {
    let movieChart = axios
      .get(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
      .then((res) => {
        setMovie(res.data.data.movies);
      })
      .catch((err) => {
        console.log("에러");
      });
  }, []);

  console.log(movie);

  return (
    <div className="movie-wrapper">
      <h3>영화 추천</h3>
      <ul>
        {movie
          ? movie.map((it, i) => {
              return (
                <li key={i}>
                  <img
                    src={it.medium_cover_image}
                    onClick={() => {
                      window.open(it.url);
                    }}
                  ></img>
                  <h4>{it.title}</h4>
                  <p>{it.summary.slice(0, 150)}...</p>
                </li>
              );
            })
          : ""}
      </ul>
    </div>
  );
}
