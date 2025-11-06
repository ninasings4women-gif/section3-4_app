"use client";

import useSWR, { mutate } from "swr";

export type Transaction = {
  id: number;
  type: "入金" | "出金";
  date: string;
  memo: string;
  amount: number;
};

// 初期データ
const initialData: Transaction[] = [
  { id: 1, type: "入金", date: "2025-11-06", memo: "給料", amount: 100000 },
  { id: 2, type: "出金", date: "2025-11-06", memo: "食費", amount: 5000 },
];

// SWRのキー
const KEY = "transactions";

// fetcher
const fetcher = async (): Promise<Transaction[]> => {
  if (typeof window === "undefined") return initialData;
  const saved = localStorage.getItem(KEY);
  return saved ? JSON.parse(saved) : initialData;
};

// 一覧を取得するフック
export function useTransactions() {
  return useSWR<Transaction[]>(KEY, fetcher, { fallbackData: initialData });
}

// 新しい収支を追加
export function addTransaction(newItem: Transaction) {
  mutate(
    KEY,
    (currentData: Transaction[] = []) => {
      const updated = [...currentData, newItem];
      if (typeof window !== "undefined") {
        localStorage.setItem(KEY, JSON.stringify(updated)); 
      }
      return updated;
    },
    { revalidate: false } 
  );
}
