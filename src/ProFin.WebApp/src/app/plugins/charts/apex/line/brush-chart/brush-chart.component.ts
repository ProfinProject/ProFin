import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-brush-chart',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './brush-chart.component.html',
  styleUrl: './brush-chart.component.css'
})
export class BrushChartComponent {
  chartOptions1 = {
    series: [
      {
        name: "series1",
        data: this.generateDayWiseTimeSeries(
          new Date("11 Feb 2017").getTime(),
          185,
          {
            min: 30,
            max: 90
          }
        )
      }
    ],
    chart: {
      id: "chart2",
      type: "line",
      height: 230,
      toolbar: {
        autoSelected: "pan",
        show: false
      }
    },
    colors: ["var(--primary)"],
    stroke: {
      width: 3
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1
    },
    markers: {
      size: 0
    },
    xaxis: {
      type: "datetime"
    }
  };

  chartOptions2 = {
    series: [
      {
        name: "series1",
        data: this.generateDayWiseTimeSeries(
          new Date("11 Feb 2017").getTime(),
          185,
          {
            min: 30,
            max: 90
          }
        )
      }
    ],
    chart: {
      id: "chart1",
      height: 130,
      type: "area",
      brush: {
        target: "chart2",
        enabled: true
      },
      selection: {
        enabled: true,
        xaxis: {
          min: new Date("19 Jun 2017").getTime(),
          max: new Date("14 Aug 2017").getTime()
        }
      }
    },


    colors: ["#febc3b"],
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.91,
        opacityTo: 0.1
      }
    },
    xaxis: {
      type: "datetime",
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      tickAmount: 2
    }
  };

  public generateDayWiseTimeSeries(baseval:any, count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}
