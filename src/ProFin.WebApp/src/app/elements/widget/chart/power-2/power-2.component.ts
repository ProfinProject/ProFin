import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-power-2',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './power-2.component.html',
  styleUrl: './power-2.component.css'
})
export class Power2Component {
  chartOptions = {
    series: [
      {
        name: "STOCK ABC",
        data: [60, 70, 40, 60, 70, 65, 63, 65,60]
      }
    ],
    chart: {
      type: "area",
      height: 150,
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },

    colors: ["#00ffb4"],

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
