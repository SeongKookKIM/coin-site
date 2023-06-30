"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Gallery() {
  let [perPage, setPerPage] = useState(15);
  let [currentPage, setCurrentPage] = useState(1);
  let [searchTerm, setSearchTerm] = useState(null);

  let [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    let movieChart = axios
      .get(
        `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`,
        {
          headers: {
            Authorization:
              "04SDFfgYRRvKUMbZg2GMsONYXqEnf5i9nNllRPtEYjnuQB7RdKf3B0UY",
          },
        }
      )
      .then((res) => {
        setImgUrl(res.data.photos);
      })
      .catch((err) => {
        console.log("에러");
      });
  }, []);

  function handleDownload(img) {
    fetch(img)
      .then((res) => {
        if (res.ok) {
          return res.blob();
        } else {
          console.log("이미지를 다운로드할 수 없습니다.");
        }
      })
      .then((file) => {
        let a = document.createElement("a");
        a.href = URL.createObjectURL(file);
        a.download = new Date().getTime();
        a.click();
      })
      .catch((err) => {
        console.log("에러");
      });
  }

  return (
    <div className="gallery-wrapper">
      <div className="search">
        <h3>사진 검색</h3>
        <div>
          <input type="text" placeholder="이미지 찾기(영문검색)"></input>
        </div>
      </div>

      <div className="gallery-box">
        <ul className="images">
          {imgUrl
            ? imgUrl.map((it, i) => {
                return (
                  <li className="card" key={i}>
                    <img src={it.src.large2x} alt="img"></img>
                    <div class="details">
                      <div class="photographer">
                        <span>${it.photographer}</span>
                      </div>
                      <button
                        onClick={() => {
                          handleDownload(it.src.large2x);
                        }}
                      >
                        다운로드
                      </button>
                    </div>
                  </li>
                );
              })
            : "Loading..."}
        </ul>
        <button className="load-more">더 보기</button>
      </div>
    </div>
  );
}
