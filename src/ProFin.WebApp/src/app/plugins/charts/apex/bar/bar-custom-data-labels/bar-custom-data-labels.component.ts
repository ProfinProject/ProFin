import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-bar-custom-data-labels',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './bar-custom-data-labels.component.html',
  styleUrl: './bar-custom-data-labels.component.css'
})
export class BarCustomDataLabelsComponent {
  chartOptions = {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }
    ],
    chart: {
      type: "bar",
      height: 380,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        barHeight: "100%",
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: "bottom"
        }
      }
    },
    colors: [
      "#0e8a74",
      "#ff5c00",
      "#d4526e",
      "#13d8aa",
      "#A5978B",
      "#2b908f",
      "#f9a3a4",
      "#90ee7e",
      "#f48024",
      "#69d2e7"
    ],
    dataLabels: {
      enabled: true,
      textAnchor: "start",
      style: {
        colors: ["#fff"]
      },
      formatter: function (val: any, opt: any) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
      },
      offsetX: 0,
      dropShadow: {
        enabled: true
      }
    },
    stroke: {
      width: 1,
      colors: ["#fff"]
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "India"
      ]
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    subtitle: {
      text: "Category Names as DataLabels inside bars",
      align: "center"
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return "";
          }
        }
      }
    },
    legend: {
      show: false
    }
  }
}
