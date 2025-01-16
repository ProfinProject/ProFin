import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-heatmap-multiple-colors',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './heatmap-multiple-colors.component.html',
  styleUrl: './heatmap-multiple-colors.component.css'
})
export class HeatmapMultipleColorsComponent {
  chartOptions = {
    series: [
      {
        name: "W1",
        data: this.generateData(8, {
          min: 0,
          max: 90
        })
      },
      {
        name: "W2",
        data: this.generateData(8, {
          min: 0,
          max: 90
        })
      },
      {
        name: "W3",
        data: this.generateData(8, {
          min: 0,
          max: 90
        })
      },
      {
        name: "W4",
        data: this.generateData(8, {
          min: 0,
          max: 90
        })
      },
      {
        name: "W5",
        data: this.generateData(8, {
          min: 0,
          max: 90
        })
      },
      {
        name: "W6",
        data: this.generateData(8, {
          min: 0,
          max: 90
        })
      },
      {
        name: "W7",
        data: this.generateData(8, {
          min: 0,
          max: 90
        })
      },
      {
        name: "W8",
        data: this.generateData(8, {
          min: 0,
          max: 90
        })
      },
      {
        name: "W9",
        data: this.generateData(8, {
          min: 0,
          max: 90
        })
      },
      {
        name: "W10",
        data: this.generateData(8, {
          min: 0,
          max: 90
        })
      },
      {
        name: "W11",
        data: this.generateData(8, {
          min: 0,
          max: 90
        })
      },
      {
        name: "W12",
        data: this.generateData(8, {
          min: 0,
          max: 90
        })
      },
      {
        name: "W13",
        data: this.generateData(8, {
          min: 0,
          max: 90
        })
      },
      {
        name: "W14",
        data: this.generateData(8, {
          min: 0,
          max: 90
        })
      },
      {
        name: "W15",
        data: this.generateData(8, {
          min: 0,
          max: 90
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
    dataLabels: {
      enabled: false
    },
    
    colors: [
      "var(--primary)",
      "#F27036",
      "#663F59",
      "#6A6E94",
      "#4E88B4",
      "#00A7C6",
      "#18D8D8",
      "#A9D794",
      "#46AF78",
      "#A93F55",
      "#8C5E58",
      "#2176FF",
      "#33A1FD",
      "#7A918D",
      "#BAFF29"
    ],
    xaxis: {
      type: "category",
      categories: [
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "01:00",
        "01:30"
      ]
    },
    grid: {
      padding: {
        right: 20
      }
    }
  };

  public generateData(count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push(y);
      i++;
    }
    return series;
  }
}
