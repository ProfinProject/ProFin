export interface Budget {
  id?: string;
  categoryTransactionId: string;
  limit: number;
  remainingBudget: number;
  categoryTransaction: Category;
  userId: string;
}

export interface Category {
  name: string;
}
