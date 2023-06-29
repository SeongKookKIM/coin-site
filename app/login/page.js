"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");

  const handleChange = (e) => {
    switch (e.target.id) {
      case "id":
        setId(e.target.value);
        break;
      case "password":
        setPass(e.target.value);
        break;
    }
  };

  const handleSubmit = async () => {
    const res = await signIn("credentials", {
      id,
      password: pass,
      redirect: true,
      callbackUrl: "/main",
    });
  };

  return (
    <div className="login-form">
      <h4>LOGIN</h4>
      <input
        id="id"
        name="id"
        type="text"
        placeholder="ID"
        onChange={(e) => {
          handleChange(e);
        }}
        autoFocus={true}
      ></input>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="PassWord"
        onChange={(e) => {
          handleChange(e);
        }}
        autoFocus={true}
      ></input>
      <button onClick={handleSubmit}>로그인</button>
    </div>
  );
}
