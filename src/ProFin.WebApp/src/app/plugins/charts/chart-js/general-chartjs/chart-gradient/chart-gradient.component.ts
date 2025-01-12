import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-gradient',
  standalone: true,
  imports: [],
  templateUrl: './chart-gradient.component.html',
  styleUrl: './chart-gradient.component.css'
})
export class ChartGradientComponent {
  chartjs_bar = {
    type: 'bar',
    data: {
      defaultFontFamily: 'Poppins',
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "My First dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: '#222fb9',
          borderWidth: "0",
          backgroundColor: "#222fb982",
          barPercentage: 0.5,
          hoverBackgroundColor: "#222fb982"
        }
      ]
    },
    options: {
      plugins: {
        legend: false,

      },
      scales: {
        y: {
          grid: {
            color: '#8a8eb95c',
          },
          ticks: {
            beginAtZero: true,
            color: "#b3b3b3",
          }
        },
        x: {
          // Change here
          grid: {
            color: '#8a8eb95c',
          },
          barPercentage: 0.5,
          ticks: {
            color: "#b3b3b3",

          },
        }
      }
    }
  }

  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('chart_gradient', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
