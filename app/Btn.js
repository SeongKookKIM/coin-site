"use client";

import { useRouter } from "next/navigation";

export default function Btn({ name, go }) {
  let router = useRouter();
  return (
    <button
      className="btnBox"
      onClick={() => {
        router.push(`${go}`);
        document.querySelector(".bg").classList.add("active");
      }}
    >
      {name}
    </button>
  );
}
