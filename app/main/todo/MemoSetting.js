"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MemoSetting({ date, result, i }) {
  let [active, setActive] = useState(false);
  let router = useRouter();

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
            <li
              onClick={() => {
                router.push(`/main/todo/edit/${result[i]._id}`);
              }}
            >
              수정
            </li>
            <li
              onClick={() => {
                fetch("/api/delete", {
                  method: "POST",
                  body: result[i]._id,
                }).then((res) => {
                  if (res.status == 400) {
                    window.alert("삭제 권한이 없습니다.");
                  }
                });
                router.refresh();
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
