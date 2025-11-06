"use client";

import { useTransactions } from "@/hooks/useTransactions";


export default function TransactionsPage() {
  const { data, error } = useTransactions();

  if (error) return <div>データの取得に失敗しました</div>;
  if (!data) return <div>読み込み中…</div>;

  const total = data.reduce((sum, t) => sum + (t.type === "入金" ? t.amount : -t.amount), 0);

  return (

    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">入出金明細</h1>
      <ul>
        {data.map((t) => (
          <li key={t.id} className="border-b py-2">
            {t.date} / {t.type} / {t.memo} / {t.amount.toLocaleString("ja-JP")}円
          </li>
        ))}
      </ul>

    <div className="font-semibold mt-4">
        合計:{total.toLocaleString("ja-JP")}円
      </div>
    </div>
  );
}
