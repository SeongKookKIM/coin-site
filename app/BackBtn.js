"use client";
import { useRouter } from "next/navigation";

export default function BackBtn() {
  let router = useRouter();
  return (
    <button
      className="backBtn"
      onClick={() => {
        router.back();
        document.querySelector(".bg").classList.remove("active");
      }}
    >
      back
    </button>
  );
}
