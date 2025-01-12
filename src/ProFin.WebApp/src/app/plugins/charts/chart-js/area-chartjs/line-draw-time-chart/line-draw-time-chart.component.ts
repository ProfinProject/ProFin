import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-draw-time-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-draw-time-chart.component.html',
  styleUrl: './line-draw-time-chart.component.css'
})
export class LineDrawTimeChartComponent {
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  chartjs_bar = {
    type: 'line',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [65, -59, 80, -81, 56, 55, -40, -54, 60, 25],
          borderColor: '#222fb9',
          backgroundColor: '#222fb982',
          fill: true
        },
        {
          label: 'Dataset 2',
          data: [35, 50, -55, 81, -56, -55, 40, 56, -35, -70],
          borderColor: '#febb3b',
          backgroundColor: '#b5b92282',
          fill: true
        }
      ]
    },
    options: {
      plugins: {
        filler: {
          propagate: false,
        },
        title: {
          display: true,
          text: (ctx:any) => 'drawTime: ' + ctx.chart.options.plugins.filler.drawTime
        }
      },
      pointBackgroundColor: '#fff',
      radius: 10,
      interaction: {
        intersect: false,
      },
      scales: {
        y: {
          grid: {
            color: '#8a8eb95c',
          },
        },
        x:{
          grid: {
            color: '#8a8eb95c',
          },
        }
      },
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('lineDrewChart', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
