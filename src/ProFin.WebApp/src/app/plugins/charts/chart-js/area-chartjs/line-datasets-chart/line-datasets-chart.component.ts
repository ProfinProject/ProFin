import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-datasets-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-datasets-chart.component.html',
  styleUrl: './line-datasets-chart.component.css'
})
export class LineDatasetsChartComponent {
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Apr"];
  chartjs_bar = {
    type: 'line',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'D0',
          data: [12, 22, 30, 10, 15, 23,  30, 25, 18, 14],
          borderColor:'#222fb9',
          backgroundColor: '#222fb9',
          hidden: true
        },
        {
          label: 'D1',
          data: [16, 35, 25, 32, 23, 26,  36, 35, 25, 19],
          borderColor: '#00e396',
          backgroundColor: '#00e396',
          fill: '-1'
        },
        {
          label: 'D2',
          data: [22, 35, 40, 20, 35, 33,  40, 35, 28, 24],
          borderColor: '#febb3b',
          backgroundColor: '#febb3b',
          hidden: true,
          fill: 1
        },
        {
          label: 'D3',
          data: [32, 35, 40, 30, 39, 35,  50, 55, 38, 35],
          borderColor: '#222fb9',
          backgroundColor: '#222fb9',
          fill: '-1'
        },
        {
          label: 'D4',
          data: [22, 35, 40, 20, 35, 33,  40, 35, 28, 24],
          borderColor: '#ee3c3c',
          backgroundColor: '#ee3c3c',
          fill: '-1'
        },
        {
          label: 'D5',
          data: [60, 68, 80, 50, 39, 66,  50, 55, 88, 35],
          borderColor: '#37699b',
          backgroundColor: '#37699b',
          fill: '+2'
        },
        {
          label: 'D6',
          data: [22, 55, 40, 20, 55, 33,  63, 35, 58, 44],
          borderColor: '#0e8a74',
          backgroundColor: '#0e8a74',
          fill: false
        },
        {
          label: 'D7',
          data: [62, 55, 100, 10, 75, 63,  80, 75, 58, 94],
          borderColor: '#febb3b',
          backgroundColor: '#febb3b',
          fill: 8
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
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
    new Chart('chartOptions1', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
