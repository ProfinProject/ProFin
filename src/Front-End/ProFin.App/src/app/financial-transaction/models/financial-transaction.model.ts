import { CategoryTransaction } from "./category-transaction.model";

export interface FinancialTransaction {
  id?: string;
  description: string;
  categoryFinancialTransaction: CategoryTransaction;
  value: number;
  categoryFinancialTransactionId: string,
  transactionType: string,
  createdDate: string
}
