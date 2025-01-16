import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-basic-line',
  standalone: true,
  imports: [],
  templateUrl: './chart-basic-line.component.html',
  styleUrl: './chart-basic-line.component.css'
})
export class ChartBasicLineComponent {
  chartjs_bar = {
    type: 'line',
    data: {
      defaultFontFamily: 'Poppins',
      labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "My First dataset",
          data: [25, 20, 60, 41, 66, 45, 80],
          borderColor: '#222fb9',
          borderWidth: "2",
          backgroundColor: 'transparent',
          tension: 0.5,
          pointBackgroundColor: '#222fb9'
        }
      ]
    },
    options: {
      plugins: {
        legend: false,

      },
      scales: {
        y: {
          max: 100,
          min: 0,
          ticks: {
            beginAtZero: true,
            stepSize: 20,
            padding: 10,
            color: "#b3b3b3",
          },
          grid: {
            color: '#8a8eb95c',
          },
        },
        x: {
          grid: {
            color: '#8a8eb95c',
          },
          ticks: {
            padding: 5,
            color: "#b3b3b3",
          }
        }
      }
    }
  }

  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('chartBasicline', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
