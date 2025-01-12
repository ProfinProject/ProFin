import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { AllSales1Component } from '../../../elements/widget/chart/all-sales-1/all-sales-1.component';
import { AllSales2Component } from '../../../elements/widget/chart/all-sales-2/all-sales-2.component';
import { StudentsChartComponent } from '../../../elements/widget/chart/students-chart/students-chart.component';
import { VisitorActivityComponent } from '../../../elements/widget/chart/visitor-activity/visitor-activity.component';
import { ActiveUsersComponent } from '../../../elements/widget/chart/active-users/active-users.component';
import { BloodPressureComponent } from '../../../elements/widget/chart/blood-pressure/blood-pressure.component';
import { HeartRateComponent } from '../../../elements/widget/chart/heart-rate/heart-rate.component';
import { GlucoseRateComponent } from '../../../elements/widget/chart/glucose-rate/glucose-rate.component';
import { ClolesterolComponent } from '../../../elements/widget/chart/clolesterol/clolesterol.component';
import { Power1Component } from '../../../elements/widget/chart/power-1/power-1.component';
import { Power2Component } from '../../../elements/widget/chart/power-2/power-2.component';
import { Power3Component } from '../../../elements/widget/chart/power-3/power-3.component';
import { Power4Component } from '../../../elements/widget/chart/power-4/power-4.component';
import { LoremIpsums1Component } from '../../../elements/widget/chart/lorem-ipsums-1/lorem-ipsums-1.component';
import { LoremIpsums2Component } from '../../../elements/widget/chart/lorem-ipsums-2/lorem-ipsums-2.component';
import { MarketNowComponent } from '../../../elements/widget/chart/market-now/market-now.component';
import { SalesAnalysisComponent } from '../../../elements/widget/chart/sales-analysis/sales-analysis.component';
import { TopProduct1Component } from '../../../elements/widget/chart/top-product-1/top-product-1.component';
import { TopProduct2Component } from '../../../elements/widget/chart/top-product-2/top-product-2.component';
import { WeeklySalesComponent } from '../../../elements/widget/chart/weekly-sales/weekly-sales.component';
import { SatesStatusComponent } from '../../../elements/widget/chart/sates-status/sates-status.component';
import { LatencyComponent } from '../../../elements/widget/chart/latency/latency.component';

@Component({
  selector: 'app-wg-chart',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    ActiveUsersComponent,
    AllSales1Component,
    AllSales2Component,
    Power1Component,
    Power2Component,
    Power3Component,
    Power4Component,
    LatencyComponent,
    MarketNowComponent,
    LoremIpsums1Component,
    LoremIpsums2Component,
    BloodPressureComponent,
    HeartRateComponent,
    GlucoseRateComponent,
    ClolesterolComponent,
    TopProduct1Component,
    TopProduct2Component,
    WeeklySalesComponent,
    SatesStatusComponent,
    SalesAnalysisComponent,
    StudentsChartComponent,
    VisitorActivityComponent,
  ],
  templateUrl: './wg-chart.component.html',
  styleUrl: './wg-chart.component.css'
})
export class WgChartComponent {
  breadcrumbList = {
    subTitle: 'Statistics',
    menu_path: 'Widget',
    currentURL: 'Statistics',
  }
}
