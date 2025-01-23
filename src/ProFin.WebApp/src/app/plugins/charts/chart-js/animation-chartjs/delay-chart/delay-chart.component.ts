import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-delay-chart',
  standalone: true,
  imports: [],
  templateUrl: './delay-chart.component.html',
  styleUrl: './delay-chart.component.css'
})
export class DelayChartComponent {
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  chartjs_bar = {
    type: 'bar',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [60, -59, 80, 81, -36, -55, 40, 56, -35, -70],
          backgroundColor: '#222fb9',
        },
        {
          label: 'Dataset 2',
          data: [35, -50, 80, -85, 56, 50, -70, -50, 60, 25],
          backgroundColor: '#00e396',
        },
        {
          label: 'Dataset 3',
          data: [65, -59, 55, -81, 56, 59, -40, -54, 70, 35],
          backgroundColor: '#febb3b',
        }
      ]
    },
    options: {
      animation: {
        onComplete: () => {
          const delayed = true;
        },
        delay: (context:any) => {
          let delay = 0;
          if (context.type === 'data' && context.mode === 'default' && !delay) {
            delay = context.dataIndex * 300 + context.datasetIndex * 100;
          }
          return delay;
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            color: '#8a8eb95c',
          },
        },
        y: {
          stacked: true,
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
    new Chart('delayChart', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
