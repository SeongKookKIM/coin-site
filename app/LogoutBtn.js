"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <button
      className="logoutBtn"
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
