import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-doughnut',
  standalone: true,
  imports: [],
  templateUrl: './chart-doughnut.component.html',
  styleUrl: './chart-doughnut.component.css'
})
export class ChartDoughnutComponent {
  ngOnInit() {
    const cricleChart= {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: 'My First Dataset',
        data: [200, 80, 120],
        backgroundColor: [
          '#222fb9',
          '#00e396',
          '#febb3b',
        ], 
        hoverOffset: 4
      }]
    };
    new Chart('doughnut-chart', {
      type: 'doughnut',
      data: cricleChart,
    });
  }
}
