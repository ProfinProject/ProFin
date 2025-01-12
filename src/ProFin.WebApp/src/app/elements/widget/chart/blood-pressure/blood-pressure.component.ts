import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-blood-pressure',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './blood-pressure.component.html',
  styleUrl: './blood-pressure.component.css'
})
export class BloodPressureComponent {
  chartOptions = {
    series: [
      {
        name: "",
        data: [33, 22, 68, 54, 8, 30, 74, 7, 36, 5, 41, 19, 43, 29, 38]
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
        columnWidth: "55%",
      }
    },

    colors: ["#787878"],

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
