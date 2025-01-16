import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-area-basic',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './area-basic.component.html',
  styleUrl: './area-basic.component.css'
})
export class AreaBasicComponent {
  chartOptions = {
    series: [
      {
        name: "STOCK ABC",
        data: [
          [1327359600000, 30.95],
          [1327446000000, 31.34],
          [1327532400000, 31.18],
          [1327618800000, 31.05],
          [1327878000000, 31.00],
          [1327964400000, 30.95],
          [1328050800000, 31.24],
          [1328137200000, 31.29],
          [1328223600000, 40.85],
          [1328482800000, 40.86],
          [1328569200000, 40.28],
          [1328655600000, 57.10],
          [1328742000000, 50.65],
          [1328828400000, 50.21],
          [1329087600000, 50.35],
          [1329174000000, 56.44],
          [1329260400000, 56.46],
          [1329346800000, 65.86],
          [1329433200000, 56.75],
          [1329778800000, 56.54],
          [1329865200000, 45.33],
          [1329951600000, 65.97],
          [1330038000000, 65.41],
          [1330297200000, 57.27],
          [1330383600000, 65.27],
          [1330470000000, 80.89],
        ]
      }
    ],
    chart: {
      id: 'area-datetime',
      type: 'area',
      height: 350,
      width: '100%',
      zoom: {
        autoScaleYaxis: true
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    colors: ['#3443da'],

    subtitle: {
      text: "Price Movements",
      align: "left"
    },

    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],

    xaxis: {
      type: "datetime"
    },
    // yaxis: {
    //   opposite: true
    // },
    legend: {
      horizontalAlign: "left"
    },

  };
}
