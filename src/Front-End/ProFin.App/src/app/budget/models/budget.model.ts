export interface Budget {
  id?: string;
  categoryTransactionId: string;
  limit: number;
  currentSpending: number;
  remainingBudget: number;
}
