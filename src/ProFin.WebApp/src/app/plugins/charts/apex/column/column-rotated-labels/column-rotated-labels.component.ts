import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-column-rotated-labels',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './column-rotated-labels.component.html',
  styleUrl: './column-rotated-labels.component.css'
})
export class ColumnRotatedLabelsComponent {
  chartOptions = {
    series: [
      {
        name: "Servings",
        data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
      }
    ],
    annotations: {
      points: [
        {
          x: "Bananas",
          seriesIndex: 0,
          label: {
            borderColor: "#222fb9",
            offsetY: 0,
            style: {
              color: "#fff",
              background: "#222fb9"
            },
            text: "Bananas are good"
          }
        }
      ]
    },
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
        // endingShape: "rounded"
      }
    },
    colors: ["#222fb9"],
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2
    },
    grid: {
      row: {
        colors: ["#fff", "#f2f2f2"]
      }
    },
    xaxis: {
      show: false,
      labels: {
        rotate: -45
      },
      categories: [
        "Apples",
        "Oranges",
        "Strawberries",
        "Pineapples",
        "Mangoes",
        "Bananas",
        "Blackberries",
        "Pears",
        "Watermelons",
        "Cherries",
        "Pomegranates",
        "Tangerines",
        "Papayas"
      ],
      tickPlacement: "on"
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100]
      }
    }
  }
}
