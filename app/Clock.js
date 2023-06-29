"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [clock, setClock] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <p className="time">{clock.toLocaleString().slice(12, 25)}</p>;
}
