export interface Budget {
  id?: string;
  categoryTransactionId: string;
  limit: number;
  remainingBudget: number;
  categoryTransaction: Category;
}

export interface Category {
  name: string;
}
