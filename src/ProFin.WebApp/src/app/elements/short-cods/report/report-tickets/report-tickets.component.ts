import { Component } from '@angular/core';
import { PieChartApexComponent } from '../../../chart-config/pie-chart-apex/pie-chart-apex.component';

@Component({
  selector: 'app-report-tickets',
  standalone: true,
  imports: [
    PieChartApexComponent
  ],
  templateUrl: './report-tickets.component.html',
  styleUrl: './report-tickets.component.css'
})
export class ReportTicketsComponent {
  chartOptions = {
    series: [25, 35, 45, 25, 35],
    colors: ['#ff7a00', '#2130b8', '#21b830', '#f7284a', '#17d1dc'],
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
