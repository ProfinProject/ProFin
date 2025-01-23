import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-point-chart',
  standalone: true,
  imports: [],
  templateUrl: './point-chart.component.html',
  styleUrl: './point-chart.component.css'
})
export class PointChartComponent {
  labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'];
  chartjs_bar = {
    type: 'line',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'Dataset',
          data: [65, 89, 80, -41, 56, 55, -40],
          borderColor: '#222fb9',
          backgroundColor:  '#222fb9',
          pointStyle: 'circle',
          pointRadius: 10,
          pointHoverRadius: 15
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: (ctx:any) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
        }
      },
      scales: {
        x: {
          grid: {
            color: '#8a8eb95c',
          },
        },
        y: {
          grid: {
            color: '#8a8eb95c',
          },
        }
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('ponitChart', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
