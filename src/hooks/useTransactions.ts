"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useTransactions() {
  const { data, error } = useSWR("/data/transactions.json", fetcher);
  return {
    transactions: data || [],
    isLoading: !error && !data,
    isError: error
  };
}
