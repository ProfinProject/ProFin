import { RouterModule, Routes } from "@angular/router";
import { ReportsAppComponent } from "./reports.app.component";
import { TransactionsReportComponent } from "./transactions-report/transactions-report.component";
import { ReportsGuard } from "./services/reports.guard";
import { NgModule } from "@angular/core";

const reportsRouterConfig: Routes = [
    {
        path: '', component: ReportsAppComponent, // Componente principal
        children: [
            { path: '', redirectTo: 'transactions', pathMatch: 'full' },
            {
                path: 'transactions', // Sub-rota
                component: TransactionsReportComponent,
                canActivate: [ReportsGuard] // Caso queira proteger a rota com o guard
            }
        ]
    },
    { path: '', redirectTo: '/reports', pathMatch: 'full' } // Redirecionamento padrão
];


@NgModule({
    imports: [
        RouterModule.forChild(reportsRouterConfig)
    ],
    exports: [RouterModule]
})
export class ReportsRoutingModule { }