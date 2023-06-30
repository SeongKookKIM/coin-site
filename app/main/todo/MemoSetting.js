"use client";

import { useState } from "react";

export default function MemoSetting({ date, result, i }) {
  let [active, setActive] = useState(false);

  return (
    <div
      className="memo-settings"
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      <span>{date}</span>
      <span
        className="settings-origin"
        onMouseEnter={() => {
          setActive(true);
        }}
      >
        ...
      </span>
      {active ? (
        <div className="settings">
          <ol>
            <li>수정</li>
            <li
              onClick={(e) => {
                fetch("/api/delete", {
                  method: "POST",
                  body: result[i]._id,
                });
              }}
            >
              삭제
            </li>
          </ol>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
