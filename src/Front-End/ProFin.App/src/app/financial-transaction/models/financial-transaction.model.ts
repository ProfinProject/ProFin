export interface FinancialTransaction {
  id?: string;
  categoryTransactionId: string;
  limit: number;
  currentSpending: number;
  remainingBudget: number;
}
