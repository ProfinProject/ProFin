import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-multi-axis-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './multi-axis-line-chart.component.html',
  styleUrl: './multi-axis-line-chart.component.css'
})
export class MultiAxisLineChartComponent {
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  chartjs_bar = {
    type: 'line',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [65, 89, 80, -41, 56, 55, -40, 56, 85, -40],
          borderColor: '#222fb9',
          backgroundColor: '#222fb9',
          yAxisID: 'y',
        },
        {
          label: 'Dataset 2',
          data: [35, -59, 80, 56, 60, -55, -40, 70, 60, -65],
          borderColor: '#febb3b',
          backgroundColor: '#febb3b',
          yAxisID: 'y1',
        }
      ]
    },
    options: {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          grid: {
            color: '#8a8eb95c',
          },
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
        x:{
          grid: {
            color: '#8a8eb95c',
          },
        }
      }
    },
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('multiAxis', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
