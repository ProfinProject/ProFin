import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-sates-status',
  standalone: true,
  imports: [],
  templateUrl: './sates-status.component.html',
  styleUrl: './sates-status.component.css'
})
export class SatesStatusComponent {
  chartjs_bar = {
    type: 'line',
    data: {
      defaultFontFamily: 'Poppins',
      labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "My First dataset",
          data: [25, 60, 30, 71, 26, 85, 50],
          borderColor: 'rgba(255, 114, 13, 1)',
          borderWidth: "2",
          backgroundColor: 'rgba(255, 114, 13, 1)',
          pointBackgroundColor: 'rgba(255, 114, 13, 1)',
          tension: 0.5,
          fill: true,
          pointRadius: 0
        }
      ]
    },
    options: {
      plugins: {
        legend: false,
        tooltip: {
          intersect: !1,
          mode: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },
      },

      responsive: true,
      maintainAspectRatio: false,

      scales: {
        y: {
          display: false,
          max: 100,
          min: 0,
          stepSize: 20,
          ticks: {
            beginAtZero: true,

            padding: 0,
            display: false,
          },
          gridLines: {
            drawBorder: false,
            display: false
          }
        },
        x: {
          display: false,
          ticks: {
            padding: 0,
            display: false,
            beginAtZero: true
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('chart_widget_16', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
