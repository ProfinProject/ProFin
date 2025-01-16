import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-scatter-datetime',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './scatter-datetime.component.html',
  styleUrl: './scatter-datetime.component.css'
})
export class ScatterDatetimeComponent {
  chartOptions = {
    series: [
      {
        name: "TEAM 1",
        data: this.generateDayWiseTimeSeries(
          new Date("11 Feb 2017 GMT").getTime(),
          20,
          {
            min: 10,
            max: 60
          }
        )
      },
      {
        name: "TEAM 2",
        data: this.generateDayWiseTimeSeries(
          new Date("11 Feb 2017 GMT").getTime(),
          20,
          {
            min: 10,
            max: 60
          }
        )
      },
      {
        name: "TEAM 3",
        data: this.generateDayWiseTimeSeries(
          new Date("11 Feb 2017 GMT").getTime(),
          30,
          {
            min: 10,
            max: 60
          }
        )
      },
      {
        name: "TEAM 4",
        data: this.generateDayWiseTimeSeries(
          new Date("11 Feb 2017 GMT").getTime(),
          10,
          {
            min: 10,
            max: 60
          }
        )
      },
      {
        name: "TEAM 5",
        data: this.generateDayWiseTimeSeries(
          new Date("11 Feb 2017 GMT").getTime(),
          30,
          {
            min: 10,
            max: 60
          }
        )
      }
    ],
    chart: {
      height: 350,
      type: "scatter",
      zoom: {
        type: "xy"
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    colors:["var(--primary)", "#febc3b", "#00e396", "#8b75d7", "#ff6077"],

    xaxis: {
      type: "datetime"
    },
    yaxis: {
      max: 70
    }
  };

  public generateDayWiseTimeSeries(baseval:any, count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([baseval, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}
