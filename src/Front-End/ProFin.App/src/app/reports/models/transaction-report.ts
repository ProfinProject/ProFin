export interface TransactionReport {
    value: number;
    description: string;
    createdDate: string;
    categoryFinancialTransaction: CategoryTransactionReport;
}

export interface CategoryTransactionReport {
    name: string;
    description: string;
}