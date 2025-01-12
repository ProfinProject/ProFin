import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-lorem-ipsums-1',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './lorem-ipsums-1.component.html',
  styleUrl: './lorem-ipsums-1.component.css'
})
export class LoremIpsums1Component {
  chartOptions = {
    series: [
      {
        name: "STOCK ABC",
        data: [50, 60, 52, 62, 55, 68, 60, 50, 60]
      }
    ],
    chart: {
      type: "area",
      height: 180,
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },

    colors: ["#4b81d5"],

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 2,
    },

    tooltip: {
      enabled: true,
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
    },
    markers: {
      size: 3,
      colors: undefined,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      onClick: undefined,
      onDblClick: undefined,
      showNullDataPoints: true,
      hover: {
        size: undefined,
        sizeOffset: 3
      }
  }
  }
}
