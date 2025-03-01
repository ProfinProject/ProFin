export interface TransactionReport {
    value: number;
    description: string;
    createdDate: string;
    transactionType: string;
    categoryFinancialTransaction: CategoryTransactionReport;
}

export interface CategoryTransactionReport {
    id: string;
    name: string;
    description: string;
}