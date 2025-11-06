"use client";

export default function StopPage() {
  if (typeof window !== "undefined") {
    window.location.href = "https://setusoku.com/";
  }
  return <p>外部サイトに移動中...</p>;
}

