# 家計簿アプリ (Next.js)

Next.js 14 + TypeScript + Tailwind CSS で構築したシンプルな家計簿アプリです。  
入出金の登録・明細確認・残高表示が可能です。

---

## 機能一覧

- 入金・出金の登録  
- 入出金明細の表示  
- 合計金額・残高の自動計算  
- ローカルストレージに保存（ブラウザ内にデータ保持）

---

## ディレクトリ構成

section3-4/
├── src/app/
│   ├── layout.tsx                # 全ページ共通レイアウト
│   ├── page.tsx                  # トップページ
│   ├── transactions/
│   │   └── page.tsx              # 入出金明細ページ
│   ├── add/
│   │   └── page.tsx              # 収支登録ページ
│   ├── stop/
│   │   └── page.tsx              # 外部ページリンク
│   │
│   └── globals.css               # 共通スタイル（Tailwind）
│
├── data/
│       └── transactions.json     # モックデータ
│
├── components/
│   ├── Header.tsx                # 共通ヘッダー
│   ├── BalanceCard.tsx           # 残高表示カード
│   ├── TransactionForm.tsx       # 登録フォーム　※準備中
│   └── TransactionList.tsx       # 明細表示　※準備中
│
├── hooks/
│   └── useTransactions.ts        # 収支データの管理フック（登録・取得など）             
│
├── public/│
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.mjs
└── README.md          


