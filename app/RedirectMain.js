"use client";
import { useRouter } from "next/navigation";

export const RedirectToMain = () => {
  const router = useRouter();
  router.push("/main");
};
