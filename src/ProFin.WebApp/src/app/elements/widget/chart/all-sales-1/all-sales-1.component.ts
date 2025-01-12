import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-all-sales-1',
  standalone: true,
  imports: [],
  templateUrl: './all-sales-1.component.html',
  styleUrl: './all-sales-1.component.css'
})
export class AllSales1Component implements OnInit {
  chartjs_bar = {
    type: 'line',
    data: {
      defaultFontFamily: 'Poppins',
      labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "My First dataset",
          data: [55, 30, 90, 41, 86, 45, 80],
          borderColor: '#3693FF',
          borderWidth: "2",
          backgroundColor: 'transparent',  
          pointBackgroundColor: '#3693FF', 
          pointRadius: 0,
          tension:0.5,
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
            display: false
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
    new Chart('chart_widget_14', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}