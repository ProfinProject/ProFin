import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-pie',
  standalone: true,
  imports: [],
  templateUrl: './chart-pie.component.html',
  styleUrl: './chart-pie.component.css'
})
export class ChartPieComponent {
  ngOnInit() {
    const cricleChart= {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          '#222fb9',
          '#00e396',
          '#febb3b',
        ],
        hoverOffset: 4
      }]
    };
    new Chart('pie-chart', {
      type: 'pie',
      data: cricleChart,
    });
  }
}
