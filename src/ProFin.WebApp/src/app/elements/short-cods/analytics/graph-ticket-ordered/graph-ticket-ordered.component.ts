import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph-ticket-ordered',
  standalone: true,
  imports: [],
  templateUrl: './graph-ticket-ordered.component.html',
  styleUrl: './graph-ticket-ordered.component.css'
})
export class GraphTicketOrderedComponent {

  chartjs_bar = {
    type: 'bar',
    data: {
      defaultFontFamily: 'Poppins',
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "My First dataset",
          data: [15, 40, 55, 40, 25, 35, 40, 50, 85, 95, 54, 35],
          borderColor: "#c56630",
          borderWidth: "0",
          backgroundColor: "#c56630",
          hoverBackgroundColor: "#2130b8"
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
          ticks: {
            beginAtZero: true,
            display: false,
            max: 100,
            min: 0,
            stepSize: 10
          },
          grid: {
            display: false,
            drawBorder: false
          }
        },
        x: {
          display: false,
          barPercentage: 0.4,
          grid: {
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
    setTimeout(() => {
      new Chart('chart_widget_2', {
        type: this.all_data.type,
        data: this.all_data.data,
        options: this.all_data.options,
      });
    }, 200);
  }

}
