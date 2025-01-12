import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-mixed-type',
  standalone: true,
  imports: [],
  templateUrl: './chart-mixed-type.component.html',
  styleUrl: './chart-mixed-type.component.css'
})
export class ChartMixedTypeComponent {
  data:any = [];
  ngOnInit() {
    const labels = [
      'January',
      'February',
      'March',
      'April'
    ]
    this.data = {
      labels: labels,
      datasets: [{
        type: 'bar',
        label: 'Bar Dataset',
        data: [10, 20, 30, 40],
        borderColor: '#222fb9',
        backgroundColor: '#222fb9'
      }, {
        type: 'line',
        label: 'Line Dataset',
        data: [50, 50, 50, 50],
        fill: false,
        borderColor: '#febb3b'
      }]
    };
    new Chart('mixed-chart', {
      type: 'scatter',
      data: this.data,
      options: {
        scales: {
          y: {
            grid: {
              color: '#8a8eb95c',
            },
            beginAtZero: true
          },
          x:{
            grid: {
              color: '#8a8eb95c',
            },
          }
        }
      }
    });
  }
}
