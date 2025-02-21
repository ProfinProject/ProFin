import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ReportsService } from './services/reports.service';
import { ReportsGuard } from './services/reports.guard';
import { ReportsAppComponent } from './reports.app.component';
import { TransactionsReportComponent } from './transactions-report/transactions-report.component';
import { ReportsRoutingModule } from './reports.route';
import { BaseChartDirective } from 'ng2-charts';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table'; // Importação do MatTableModule
import { MatPaginatorModule } from '@angular/material/paginator';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoriesReportComponent } from './categories-report/categories-report.component';


@NgModule({
  declarations: [
    ReportsAppComponent,
    TransactionsReportComponent,
    SidebarComponent,
    CategoriesReportComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReportsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BaseChartDirective,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    [provideCharts(withDefaultRegisterables())],
    provideHttpClient(),
    ReportsService,
    ReportsGuard]
})
export class ReportsModule { }
