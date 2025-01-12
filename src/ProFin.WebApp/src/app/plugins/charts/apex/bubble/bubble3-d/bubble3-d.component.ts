import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexXAxis,
  ApexDataLabels,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexTheme,
  NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexAxisChartSeries[];
  chart: ApexChart;
  labels?: string[];
  colors?: string[];
  dataLabels?: ApexDataLabels;
  fill?: ApexFill;
  theme?: ApexTheme;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis;
  title?: ApexTitleSubtitle;
};

@Component({
  selector: 'app-bubble3-d',
  standalone: true,
  imports: [
    NgApexchartsModule
  ],
  templateUrl: './bubble3-d.component.html',
  styleUrl: './bubble3-d.component.css'
})
export class Bubble3DComponent {

  public generateData(baseval: any, count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      //var x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([baseval, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
  options: any;

  constructor() {
    const chartOptions: Partial<ChartOptions> = {
      series: [
        {
          name: "Product1",
          data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Product2",
          data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Product3",
          data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Product4",
          data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        }
      ],
      chart: {
        height: 350,
        type: "bubble",
        toolbar: {
          show: false
        }
      },

      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient"
      },
      xaxis: {
        tickAmount: 12,
        type: "datetime",
        labels: {
          rotate: 0
        }
      },
      yaxis: {
        max: 70
      },
      theme: {
        palette: "palette2"
      }
    };
    this.options = chartOptions;
  }

}
