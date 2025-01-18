import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-bubble-simple',
  standalone: true,
  imports: [
    BarChartApexComponent ,

  ],
  templateUrl: './bubble-simple.component.html',
  styleUrl: './bubble-simple.component.css'
})
export class BubbleSimpleComponent {
  chartOptions = {
    series: [
      {
        name: "Bubble1",
        data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: "Bubble2",
        data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: "Bubble3",
        data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: "Bubble4",
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
    colors:["var(--primary)", "#ff5c00", "#febb3b", "#ff6077", "#8b75d7"],
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 0.8
    },
    xaxis: {
      tickAmount: 12,
      type: "category"
    },
    yaxis: {
      max: 70
    }
  };

  public generateData(baseval:any, count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}
