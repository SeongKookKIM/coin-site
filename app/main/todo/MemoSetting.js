"use client";

import { useState } from "react";

export default function MemoSetting({ date }) {
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
            <li>삭제</li>
          </ol>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
