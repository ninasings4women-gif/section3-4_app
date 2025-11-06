"use client";

import { useState } from "react";
import { addTransaction } from "../../hooks/useTransactions"; // ←相対パス
import { useRouter } from "next/navigation";

export default function AddPage() {
  const [type, setType] = useState<"入金" | "出金">("入金");
  const [date, setDate] = useState("");
  const [memo, setMemo] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      type,
      date,
      memo,
      amount,
    };
    addTransaction(newItem);
    router.push("/transactions");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-xl p-6">
      <h1 className="text-2xl font-bold text-center mb-6">収支を登録</h1>

      {/* ✅ form 開始 */}
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* 種類 */}
        <div>
          <label className="block mb-1 font-medium">種類</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as "入金" | "出金")}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="入金">入金</option>
            <option value="出金">出金</option>
          </select>
        </div>

        {/* 日付 */}
        <div>
          <label className="block mb-1 font-medium">日付</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* メモ */}
        <div>
          <label className="block mb-1 font-medium">メモ</label>
          <input
            type="text"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="例：昼食、交通費など"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* 金額 */}
        <div>
          <label className="block mb-1 font-medium">金額（円）</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* 登録ボタン */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition"
        >
          登録する
        </button>
      </form>
      {/* ✅ form 終了 */}
    </div>
  );
}
