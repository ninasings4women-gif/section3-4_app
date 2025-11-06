"use client";
import { useEffect } from "react";

export default function StopPage() {
  useEffect(() => {
    window.location.href = "https://setusoku.com/";
  }, []);

  return <p>外部サイトに移動中...</p>;
}
