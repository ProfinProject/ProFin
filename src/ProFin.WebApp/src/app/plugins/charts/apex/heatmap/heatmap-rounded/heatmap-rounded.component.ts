import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-heatmap-rounded',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './heatmap-rounded.component.html',
  styleUrl: './heatmap-rounded.component.css'
})
export class HeatmapRoundedComponent {
  chartOptions = {
    series: [
      {
        name: "Metric1",
        data: this.generateData(20, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric2",
        data: this.generateData(20, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric3",
        data: this.generateData(20, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric4",
        data: this.generateData(20, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric5",
        data: this.generateData(20, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric6",
        data: this.generateData(20, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric7",
        data: this.generateData(20, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric8",
        data: this.generateData(20, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric9",
        data: this.generateData(20, {
          min: 0,
          max: 90
        })
      }
    ],
    chart: {
      height: 350,
      type: "heatmap",
      toolbar: {
        show: false
      }
    },
    responsive: [
      {
        breakpoint: 540,
        options: {
          series: [
            {
              name: "Metric1",
              data: this.generateData(10, {
                min: 0,
                max: 90
              })
            },
            {
              name: "Metric2",
              data: this.generateData(10, {
                min: 0,
                max: 90
              })
            },
            {
              name: "Metric3",
              data: this.generateData(10, {
                min: 0,
                max: 90
              })
            },
            {
              name: "Metric4",
              data: this.generateData(10, {
                min: 0,
                max: 90
              })
            },
            {
              name: "Metric5",
              data: this.generateData(10, {
                min: 0,
                max: 90
              })
            },
            {
              name: "Metric6",
              data: this.generateData(10, {
                min: 0,
                max: 90
              })
            },
            {
              name: "Metric7",
              data: this.generateData(10, {
                min: 0,
                max: 90
              })
            },
            {
              name: "Metric8",
              data: this.generateData(10, {
                min: 0,
                max: 90
              })
            },
            {
              name: "Metric9",
              data: this.generateData(10, {
                min: 0,
                max: 90
              })
            }
          ]
        }
      }
    ],
    stroke: {
      width: 0
    },
    plotOptions: {
      heatmap: {
        radius: 30,
        enableShades: false,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 50,
              color: "#222fb9"
            },
            {
              from: 51,
              to: 100,
              color: "#febb3b"
            }
          ]
        }
      }
    },

    dataLabels: {
      enabled: true,
      style: {
        colors: ["#fff"]
      }
    },
    xaxis: {
      type: "category"
    }
  };

  public generateData(count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
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
