import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-heatmap-basic',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './heatmap-basic.component.html',
  styleUrl: './heatmap-basic.component.css'
})
export class HeatmapBasicComponent {
  chartOptions = {
    series: [
      {
        name: "Metric1",
        data: this.generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric2",
        data: this.generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric3",
        data: this.generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric4",
        data: this.generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric5",
        data: this.generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric6",
        data: this.generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric7",
        data: this.generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric8",
        data: this.generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric9",
        data: this.generateData(18, {
          min: 0,
          max: 90
        })
      }
    ],
    chart: {
      height: 350,
      type: "heatmap",
      toolbar:{
        show: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: [ "#222fb9"],
  
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
