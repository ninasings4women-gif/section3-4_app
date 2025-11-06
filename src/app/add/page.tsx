"use client";
import { useState } from "react";
import NavButtons from "../../components/NavButtons";

export default function AddPage() {
  const [form, setForm] = useState({ type: "入金", desc: "", amount: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`登録：${form.type} ${form.desc} ${form.amount}円（ダミー処理）`);
    setForm({ type: "入金", desc: "", amount: "" });
  };

  return (
    <main style={{ padding: 20 }}>
      <h2>収支を登録</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>種別：</label>
          <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
            <option>入金</option>
            <option>出金</option>
          </select>
        </div>
        <div>
          <label>内容：</label>
          <input
            type="text"
            value={form.desc}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
          />
        </div>
        <div>
          <label>金額：</label>
          <input
            type="number"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />
        </div>
        <button type="submit">登録</button>
      </form>
      <NavButtons />
    </main>
  );
}
