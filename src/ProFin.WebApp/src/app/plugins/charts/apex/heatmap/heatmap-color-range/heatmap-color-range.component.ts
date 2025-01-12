import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-heatmap-color-range',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './heatmap-color-range.component.html',
  styleUrl: './heatmap-color-range.component.css'
})
export class HeatmapColorRangeComponent {
  chartOptions = {
    series: [
      {
        name: "Jan",
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: "Feb",
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: "Mar",
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: "Apr",
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: "May",
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: "Jun",
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: "Jul",
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: "Aug",
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: "Sep",
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      }
    ],
    chart: {
      height: 350,
      type: "heatmap",
      toolbar:{
        show: false
      }
    },
    
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        colorScale: {
          ranges: [
            {
              from: -30,
              to: 5,
              name: "low",
              color: "#00A100"
            },
            {
              from: 6,
              to: 20,
              name: "medium",
              color: "#128FD9"
            },
            {
              from: 21,
              to: 45,
              name: "high",
              color: "#FFB200"
            },
            {
              from: 46,
              to: 55,
              name: "extreme",
              color: "#FF0000"
            }
          ]
        }
      }
    },
    dataLabels: {
      enabled: false
    },
  };

  public generateData(count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }
}
