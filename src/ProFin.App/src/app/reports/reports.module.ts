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




@NgModule({
  declarations: [
    ReportsAppComponent,
    TransactionsReportComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReportsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(),
    ReportsService,
    ReportsGuard]
})
export class ReportsModule { }
