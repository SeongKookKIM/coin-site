"use client";

import { useState } from "react";

export default async function Popup({ sessionName }) {
  function handleFade() {
    document.querySelector(".popup").classList.remove("unfade");
  }

  return (
    <div className="popup">
      <div className="content">
        <header>
          <p>노트 작성</p>
          <span
            onClick={() => {
              handleFade();
            }}
          >
            X
          </span>
        </header>
        <form action="/api/memo" method="POST">
          <div className="row title">
            <label>제목</label>
            <input type="text" name="title" />
          </div>
          <div className="row descripttion">
            <label>내용</label>
            <textarea name="description"></textarea>
          </div>
          <input
            style={{ display: "none" }}
            type="text"
            name="name"
            defaultValue={sessionName}
          ></input>
          <input
            style={{ display: "none" }}
            type="text"
            name="date"
            defaultValue={`${new Date().getFullYear()}년 ${
              new Date().getMonth() + 1
            }월 ${new Date().getDate()}일`}
          ></input>
          <button type="submit">ADD Note</button>
        </form>
      </div>
    </div>
  );
}
