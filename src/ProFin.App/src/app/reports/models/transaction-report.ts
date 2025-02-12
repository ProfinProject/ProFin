export interface TransactionReport {
    value: number;
    description: string;
    category: CategoryTransactionReport;
}

export interface CategoryTransactionReport {
    name: string;
    description: string;
}