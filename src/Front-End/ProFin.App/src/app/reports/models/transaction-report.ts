export interface TransactionReport {
    value: number;
    description: string;
    createdDate: string;
    category: CategoryTransactionReport;
}

export interface CategoryTransactionReport {
    name: string;
    description: string;
}