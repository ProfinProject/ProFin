import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-heart-rate',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './heart-rate.component.html',
  styleUrl: './heart-rate.component.css'
})
export class HeartRateComponent {
  chartOptions = {
    series: [
      {
        name: "",
        data: [73, 53, 50, 67, 3, 56, 19, 59, 37, 32, 40, 26, 71, 19, 4, 53, 55, 31, 37]
      }
    ],
    chart: {
      type: "bar",
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "90%",
      }
    },

    colors: ["var(--primary)"],

    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      width: 2,
      colors: ["transparent"]
    },

    legend: {
      show: false,
    },

    grid: {
      show: false,
    },

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
        "Oct"
      ]
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1
    }
  }
}
