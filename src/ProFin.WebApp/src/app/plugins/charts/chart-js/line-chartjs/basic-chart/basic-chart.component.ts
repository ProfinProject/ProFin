import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-basic-chart',
  standalone: true,
  imports: [],
  templateUrl: './basic-chart.component.html',
  styleUrl: './basic-chart.component.css'
})
export class BasicChartComponent {
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  chartjs_bar = {
    type: 'line',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [25, -59, 80, 81, -56, -55, 40, 56, -35, -70],
          borderColor: '#222fb9',
          backgroundColor: '#222fb9',
        },
        {
          label: 'Dataset 2',
          data: [-30, 39, 80, -81, 56, 55, -40, -54, 60, 25],
          borderColor: '#febb3b',
          backgroundColor:'#febb3b',
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
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
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('basicline', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
