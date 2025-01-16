import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-stepline-chart',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './stepline-chart.component.html',
  styleUrl: './stepline-chart.component.css'
})
export class SteplineChartComponent {
  chartOptions = {
    series: [
      {
        name: "stepline-series",
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
      }
    ],

    chart: {
      type: "line",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "stepline"
    },
    colors: ['var(--primary)'],
    dataLabels: {
      enabled: false
    },
    markers: {
      hover: {
        sizeOffset: 4
      }
    }
  }
}
