// src/hooks/useTransactions.ts
"use client";

import useSWR, { mutate } from "swr";

export type Transaction = {
  id: number;
  type: "入金" | "出金";
  date: string;
  memo: string;
  amount: number;
};

const initialData: Transaction[] = [
  { id: 1, type: "入金", date: "2025-11-06", memo: "給料", amount: 100000 },
  { id: 2, type: "出金", date: "2025-11-06", memo: "食費", amount: 5000 },
];

const fetcher = () => Promise.resolve(initialData);

export function useTransactions() {
  return useSWR<Transaction[]>("transactions", fetcher);
}

// 新しい取引を追加する関数
export function addTransaction(newItem: Transaction) {
  mutate("transactions", (data?: Transaction[]) => {
    if (!data) return [newItem];
    return [...data, newItem];
  }, false);
}
