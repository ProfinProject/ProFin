import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-clolesterol',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './clolesterol.component.html',
  styleUrl: './clolesterol.component.css'
})
export class ClolesterolComponent {
  chartOptions = {
    series: [
      {
        name: "STOCK ABC",
        data: [2, 3, 4, 6, 5, 3, 8, 4, 7, 6, 1, 5, 7, 8]
      }
    ],
    chart: {
      height: "100px",
      type: "area",
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },

    colors: ["#FF720D"],

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 1,
    },

    tooltip: {
      enabled: false,
    },

    legend: {
      horizontalAlign: "left",
      show: false,
    },

    grid: {
      show: false,
    },

    labels: [
      "13 Nov 2017",
      "14 Nov 2017",
      "15 Nov 2017",
      "16 Nov 2017",
      "17 Nov 2017",
      "20 Nov 2017",
      "21 Nov 2017",
      "22 Nov 2017",
      "23 Nov 2017",
      "24 Nov 2017",
      "27 Nov 2017",
      "28 Nov 2017",
      "29 Nov 2017",
    ],
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov"
      ]
    },
    yaxis: {
      opposite: false,
      show: false,
    },
    fill: {
      opacity: 1
    }
  }
}
