import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-sales-analysis',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './sales-analysis.component.html',
  styleUrl: './sales-analysis.component.css'
})
export class SalesAnalysisComponent {
  chartOptions = {
    series: [
      {
        name: "Desktops",
        data: [4, 5, 1.5, 6, 7, 5.5, 5.8, 4.6]
      }
    ],
    chart: {
      type: "line",
      height: 250 ,
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
  
    colors: ["#2421DA"],
  
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
      colors: ['#2421DA'],
      curve: "straight"
    },
  
    legend: {
      show: false,
    },
  
    grid: {
      show: false,
      row: {
        colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
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
        "1", "2", "3", "4", "5", "6", "7", "8"
      ],
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
