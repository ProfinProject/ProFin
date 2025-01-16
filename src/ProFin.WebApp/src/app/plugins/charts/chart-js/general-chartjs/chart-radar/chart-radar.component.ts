import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-radar',
  standalone: true,
  imports: [],
  templateUrl: './chart-radar.component.html',
  styleUrl: './chart-radar.component.css'
})
export class ChartRadarComponent {
  ngOnInit() {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
    const dataBar = {
      labels: labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [35, 40, 81, 35, 92, 40, 10],
          borderColor: '#febb3b',
          backgroundColor: '#b9a822b8',
        },
        {
          label: 'Dataset 2',
          data: [67, 70, 31, 65, 42, 86, 44],
          borderColor: '#222fb9',
          backgroundColor: '#222fb947',
        }
      ]
    };
    new Chart('redar-chart', {
      type: 'radar',
      data: dataBar,
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
              color: 'red'
            }
          }
        },
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Radar Chart'
          }
        }
      },
    });
  }
}
