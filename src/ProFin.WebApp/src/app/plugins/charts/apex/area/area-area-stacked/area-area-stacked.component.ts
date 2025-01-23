import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-area-area-stacked',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './area-area-stacked.component.html',
  styleUrl: './area-area-stacked.component.css'
})
export class AreaAreaStackedComponent {
  chartOptions = {
    series: [
      {
        name: "South",
        data: [
          [1327359600000, 30.95],
          [1327446000000, 31.34],
          [1327532400000, 62.18],
          [1327618800000, 31.05],
          [1327878000000, 31.00],
          [1327964400000, 30.95],
          [1328050800000, 31.24],
          [1328137200000, 52.29],
          [1328223600000, 40.85],
          [1328482800000, 85.86],
          [1328569200000, 40.28],
          [1328655600000, 63.10],
        ]
      },
      {
        name: "North",
        data: [
          [1327359600000, 30.95],
          [1327446000000, 20.34],
          [1327532400000, 31.18],
          [1327618800000, 31.05],
          [1327878000000, 65.00],
          [1327964400000, 30.95],
          [1328050800000, 31.24],
          [1328137200000, 31.29],
          [1328223600000, 40.85],
          [1328482800000, 40.86],
          [1328569200000, 85.28],
          [1328655600000, 63.10],
        ]
      },
      {
        name: "Central",
        data: [
          [1327359600000, 10.95],
          [1327446000000, 31.34],
          [1327532400000, 15.18],
          [1327618800000, 31.05],
          [1327878000000, 31.00],
          [1327964400000, 30.95],
          [1328050800000, 52.24],
          [1328137200000, 31.29],
          [1328223600000, 86.85],
          [1328482800000, 23.86],
          [1328569200000, 40.28],
          [1328655600000, 85.10],
        ]
      }
    ],
    chart: {
      type: "area",
      height: 350,
      stacked: true,
      events: {
        selection: function (chart: any, e: any) {
          console.log(new Date(e.xaxis.min));
        }
      },
      toolbar: {
        show: false
      }
    },

    dataLabels: {
      enabled: false
    },
    colors: ['#3443da', '#febc3b', '#00e396'],
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8
      }
    },
    legend: {
      position: "top",
      horizontalAlign: "left"
    },
    xaxis: {
      type: "datetime"
    }
  };
}
