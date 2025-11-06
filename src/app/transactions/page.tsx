// app/transactions/page.tsx
"use client";

import useSWR from "swr";

const fetcher = () =>
  Promise.resolve([
    { id: 1, type: "入金", date: "2025-11-06", memo: "給料", amount: 180000 },
    { id: 2, type: "出金", date: "2025-11-06", memo: "食費", amount: 5000 },
  ]);

export default function TransactionsPage() {
  const { data, error } = useSWR("transactions", fetcher);

  if (error) return <div>データの取得に失敗しました</div>;
  if (!data) return <div>読み込み中…</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">入出金明細</h1>
      <ul>
        {data.map((t) => (
          <li key={t.id} className="mb-2">
            {t.date} - {t.type} - {t.memo} - {t.amount}円
          </li>
        ))}
      </ul>
    </div>
  );
}
