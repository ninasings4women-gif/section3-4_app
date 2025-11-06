"use client";

import { useTransactions } from "@/hooks/useTransactions";

import NavButtons from "@/components/NavButtons";

export default function HomePage() {
  const { data: transactions } = useTransactions();

 // transactions がまだ読み込まれていない場合の初期値
  if (!transactions) return <p className="text-center mt-10">データは未登録です</p>;

// 残高計算
  const balance = transactions.reduce((acc, t) => {
    return t.type === "入金" ? acc + t.amount : acc - t.amount;
  }, 0);

  return (
    <div className="max-w-md mx-auto mt-10 text-center bg-white shadow-md rounded-xl p-6">
      <h1 className="text-2xl font-bold mb-4">家計簿アプリ</h1>

      <p className="text-lg mb-2">現在の残高</p>
      <p
        className={`text-3xl font-extrabold mb-6 ${
          balance >= 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        ¥{balance.toLocaleString()}
      </p>

      <NavButtons />
    </div>
  );
}