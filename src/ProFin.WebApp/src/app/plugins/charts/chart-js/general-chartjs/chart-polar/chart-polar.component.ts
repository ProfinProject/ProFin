import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-polar',
  standalone: true,
  imports: [],
  templateUrl: './chart-polar.component.html',
  styleUrl: './chart-polar.component.css'
})
export class ChartPolarComponent {
  ngOnInit() {
    const cricleChart = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: 'My First Dataset',
        data: [90, 50, 100, 60, 30],
        backgroundColor: [
          '#222fb9',
          '#00e396',
          '#febb3b',
          '#ff5c00',
          '#fd5f76'
        ],
        borderColor: [
          'yellow',
          'blue',
          'red',
      ],
        hoverOffset: 4
      }]
    };
    new Chart('polar-chart', {
      type: 'polarArea',
      data: cricleChart,
      options: {
        scales: {
          r: {
            grid: {
              color: '#8a8eb95c'
            },
            angleLines: {
              color: '#8a8eb95c'
            },
            pointLabels: {
              color: '#8a8eb95c'
            },
            ticks: {
              display: false,
              color: 'red'
            }
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Polar Area Chart'
          }
        }
      },
    });
  }
}
