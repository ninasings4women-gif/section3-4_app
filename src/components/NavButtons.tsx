"use client";
import Link from "next/link";

export default function NavButtons() {
  return (
    <div style={{ marginTop: 20, display: "flex", gap: 10, justifyContent: "center" }}>
      <Link href="/transactions"><button>入出金詳細</button></Link>
      <Link href="/add"><button>収支を登録</button></Link>
      <Link href="/stop"><button>STOP使いすぎ</button></Link>
    </div>
  );
}
