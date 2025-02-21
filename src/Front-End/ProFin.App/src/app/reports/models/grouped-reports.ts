import { CategoryTransactionReport, TransactionReport } from "./transaction-report";

export interface GroupedReports {
    [key: string]: {
        category: CategoryTransactionReport;
        transactions: TransactionReport[];
        totalValue: number;
    };
}