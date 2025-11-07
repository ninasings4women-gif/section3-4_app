"use client";

import Link from "next/link";

export default function NavButtons() {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <Link href="/transactions"
        className="px-4 py-2 bg-blue-200 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
      >
          入出金詳細
        </Link>

      <Link href="/add"
        className="px-4 py-2 bg-green-300 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
        >
          収支を登録
        </Link>

      <Link href="/stop"
        className="px-4 py-2 bg-red-300 text-white font-semibold rounded-lg shadow hover:bg-red-800 transition"
        >
          STOP使いすぎ
        </Link>
    </div>
  );
}
