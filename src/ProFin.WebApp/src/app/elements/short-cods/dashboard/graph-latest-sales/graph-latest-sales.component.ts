import { Component } from '@angular/core';
import { DropdownComponent } from '../../../dropdown/dropdown.component';
import { PieChartApexComponent } from '../../../chart-config/pie-chart-apex/pie-chart-apex.component';

@Component({
  selector: 'app-graph-latest-sales',
  standalone: true,
  imports: [
    DropdownComponent,
    PieChartApexComponent
  ],
  templateUrl: './graph-latest-sales.component.html',
  styleUrl: './graph-latest-sales.component.css'
})
export class GraphLatestSalesComponent {
  dropdownWeekly = {
    select: 'Weekly',
    value: ['Monthly', 'Weekly', 'Daily']
  }
  dropdownYear = {
    select: '2023',
    value: ['2023', '2024']
  }


  chartOptions = {
    series: [25, 35, 45],
    colors: ['#ff7a00', 'var(--primary)', '#21b830'],
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
          size: '40%'

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
  }
}
