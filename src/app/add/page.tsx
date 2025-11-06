"use client";

import { useState } from "react";
import { addTransaction } from "../../hooks/useTransactions";

export default function AddPage() {
  const [type, setType] = useState<"入金" | "出金">("入金");
  const [date, setDate] = useState("");
  const [memo, setMemo] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !memo || !amount) {
      alert("入力していない項目があります");
      return;
    }

    addTransaction({
      id: Date.now(),
      type,
      date,
      memo,
      amount: Number(amount),
    });

    alert("登録しました！");
    setDate("");
    setMemo("");
    setAmount("");
  };

  return (
    <div>
      <h1>収支を登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>入出金：</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as "入金" | "出金")}
          >
            <option value="入金">入金</option>
            <option value="出金">出金</option>
          </select>
        </div>

        <div>
          <label>日付：</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label>メモ：</label>
          <input
            type="text"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
        </div>

        <div>
          <label>金額：</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button type="submit">登録</button>
      </form>
    </div>
  );
}
