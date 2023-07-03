"use client";

import { useRouter } from "next/navigation";

export default function Close() {
  let router = useRouter();
  return (
    <span
      onClick={() => {
        router.push("/main/todo");
      }}
    >
      X
    </span>
  );
}
