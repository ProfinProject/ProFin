import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stacked-chartjs',
  standalone: true,
  imports: [],
  templateUrl: './stacked-chartjs.component.html',
  styleUrl: './stacked-chartjs.component.css'
})
export class StackedChartjsComponent {
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  chartjs_bar = {
    type: 'bar',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [65, -59, 80, 81, -56, -55, 40, 56, -35, -70],
          backgroundColor: '#00e396',
          stack: 'Stack 0',
        },
        {
          label: 'Dataset 2',
          data: [65, -59, 80, -81, 56, 55, -40, -54, 60, 25],
          backgroundColor: '#222fb9',
          stack: 'Stack 0',
        },
        {
          label: 'Dataset 3',
          data:[65, -59, 80, -81, 56, 55, -40, -54, 60, 25],
          backgroundColor: '#febb3b',
          stack: 'Stack 1',
        },
      ]
    },
    options: {
      responsive: true,
      interaction: {
        intersect: false,
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
    new Chart('stackedChart', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
