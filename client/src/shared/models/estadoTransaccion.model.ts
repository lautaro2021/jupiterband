export type TransactionStatusType = "Completada" | "Rechazada" | "En proceso";

export type TransactionType = {
  productDescription: string;
  date: string;
  amount: number;
  transactionStatus: TransactionStatusType;
  size?: "md";
};

export const TransactionStatus: Record<TransactionStatusType, string> = {
  Completada: "#00FF66",
  Rechazada: "#FF1400",
  "En proceso": "#FFB800",
};

export const transactionFakeData: TransactionType[] = [
  {
    productDescription: "Fernet Branca",
    date: "02:24 AM",
    amount: 4500,
    transactionStatus: "Completada",
  },
  {
    productDescription: "Fernet Branca",
    date: "02:24 AM",
    amount: 4500,
    transactionStatus: "Rechazada",
  },
  {
    productDescription: "Fernet Branca",
    date: "02:24 AM",
    amount: 4500,
    transactionStatus: "En proceso",
  },
  {
    productDescription: "Fernet Branca",
    date: "02:24 AM",
    amount: 4500,
    transactionStatus: "Completada",
  },
  {
    productDescription: "Fernet Branca",
    date: "02:24 AM",
    amount: 4500,
    transactionStatus: "Rechazada",
  },
  {
    productDescription: "Fernet Branca",
    date: "02:24 AM",
    amount: 4500,
    transactionStatus: "En proceso",
  },
  {
    productDescription: "Fernet Branca",
    date: "02:24 AM",
    amount: 4500,
    transactionStatus: "Completada",
  },
  {
    productDescription: "Fernet Branca",
    date: "02:24 AM",
    amount: 4500,
    transactionStatus: "Rechazada",
  },
  {
    productDescription: "Fernet Branca",
    date: "02:24 AM",
    amount: 4500,
    transactionStatus: "En proceso",
  },
  {
    productDescription: "Fernet Branca",
    date: "02:24 AM",
    amount: 4500,
    transactionStatus: "Completada",
  },
  {
    productDescription: "Fernet Branca",
    date: "02:24 AM",
    amount: 4500,
    transactionStatus: "Rechazada",
  },
  {
    productDescription: "Fernet Branca",
    date: "02:24 AM",
    amount: 4500,
    transactionStatus: "En proceso",
  },
];
