import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-power-1',
  standalone: true,
  imports: [],
  templateUrl: './power-1.component.html',
  styleUrl: './power-1.component.css'
})
export class Power1Component {
  chartjs_bar = {
    type: 'bar',
    data: {
      defaultFontFamily: 'Poppins',
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "My First dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: 'rgba(255, 255, 255, .8)',
          borderWidth: "0",
          backgroundColor: 'rgba(255, 255, 255, .8)',
          hoverBackgroundColor: 'rgba(255, 255, 255, .8)',
          barThickness: 40,
        }
      ]
    },
    options: {
      plugins: {

        legend: false,
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          display: false,
          max: 100,
          min: 0,
          stepSize: 10,
          ticks: {
            beginAtZero: true,
            display: false,
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        },
        x: {
          display: false,
          barPercentage: 0.5,
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false
          }
        }
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('chart_widget_1', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }

}
