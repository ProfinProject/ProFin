import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-radar-polygon-fill',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './radar-polygon-fill.component.html',
  styleUrl: './radar-polygon-fill.component.css'
})
export class RadarPolygonFillComponent {
  chartOptions = {
    series: [
      {
        name: "Series 1",
        data: [20, 100, 40, 30, 50, 80, 33]
      }
    ],
    chart: {
      height: 350,
      type: "radar",
      toolbar: {
        show: false,
      }
    },
    dataLabels: {
      enabled: true
    },
    colors: ["#222fb9"],
    markers: {
      size: 4,
      colors: ["#fff"],
      strokeColors: ["#FF4560"],
      strokeWidth: 2
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val;
        }
      }
    },
    xaxis: {
      categories: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ]
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter: function (val: any, i: any) {
          if (i % 2 === 0) {
            return val;
          } else {
            return "";
          }
        }
      }
    }
  };
}
