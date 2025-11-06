// app/page.tsx
"use client";

import Link from "next/link";
import useSWR from "swr";

// モックデータ用フェッチ関数
const fetcher = () =>
  Promise.resolve({
    balance: 10000, // 残高のモック値
  });

export default function HomePage() {
  const { data, error } = useSWR("balance", fetcher);

  if (error) return <div>読み込みエラー</div>;
  if (!data) return <div>読み込み中…</div>;

  return (
    <main className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">家計簿アプリ</h1>
      
      <div className="text-2xl mb-8">
        現在の残高: <span className="font-mono">{data.balance}円</span>
      </div>

      <div className="space-x-4">
        <Link
          href="/transactions"
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          入出金詳細
        </Link>
        <Link
          href="/add"
          className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600"
        >
          収支を登録
        </Link>
        <Link
          href="https://setusoku.com/"
          target="_blank"
          className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600"
        >
          STOP使いすぎ
        </Link>
      </div>
    </main>
  );
}
