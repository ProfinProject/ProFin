import { Component } from '@angular/core';
import { PieChartApexComponent } from '../../../chart-config/pie-chart-apex/pie-chart-apex.component';

@Component({
  selector: 'app-report-customers',
  standalone: true,
  imports: [
    PieChartApexComponent
  ],
  templateUrl: './report-customers.component.html',
  styleUrl: './report-customers.component.css'
})
export class ReportCustomersComponent {
  chartOptions = {
    series: [75, 25],
    colors: ['#ff7a00', '#21b830'],
    chart: {
      width: 220,
      height: 220,
      type: 'donut',
      sparkline: {
        enabled: true,
      },

    },
    plotOptions: {
      pie: {
        customScale: 1,
        donut: {
          size: '70%'

        }
      }
    },
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 1300,
      options: {
        chart: {
          width: 120,
          height: 120
        },
      }
    }],
    legend: {
      show: false
    }
  };
}
