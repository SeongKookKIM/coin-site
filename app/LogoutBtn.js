"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Logout() {
  let router = useRouter();
  return (
    <button
      onClick={() => {
        signOut({
          callbackUrl: "/",
        });
      }}
    >
      로그아웃
    </button>
  );
}
