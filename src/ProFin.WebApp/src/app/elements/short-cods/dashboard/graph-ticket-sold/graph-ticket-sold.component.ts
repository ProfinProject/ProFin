import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { GraphIncrementComponent } from './graph-increment/graph-increment.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-graph-ticket-sold',
  standalone: true,
  imports: [
    RouterLink,
    GraphIncrementComponent
  ],
  templateUrl: './graph-ticket-sold.component.html',
  styleUrl: './graph-ticket-sold.component.css'
})
export class GraphTicketSoldComponent {

  style = getComputedStyle(document.body)
  chartCol = getComputedStyle(document.body).getPropertyValue('--primary');

  labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  chartjs_bar = {
    type: 'bar',
    data: {
      defaultFontFamily: 'Poppins',
      labels: this.labels,
      datasets: [{
        label: 'Expense',
        backgroundColor: this.chartCol,
        hoverBackgroundColor: this.chartCol+'ad',
        barThickness: "18",
        data: [
          '20',
          '14',
          '18',
          '25',
          '27',
          '22',
          '12',
          '24',
          '20',
          '14',
          '18',
          '16'
        ]
      }, {
        label: 'Earning',
        backgroundColor: '#f0f0f0',
        hoverBackgroundColor: '#e6e6e6',
        barThickness: "15",
        data: [
          '12',
          '18',
          '14',
          '7',
          '5',
          '10',
          '20',
          '8',
          '12',
          '18',
          '14',
          '16'
        ]
      }]
    },
    options: {
      plugins: {
        legend: false,
      },
      legend: {
        display: false
      },
      title: {
        display: false
      },
      tooltips: {
        mode: 'index',
        intersect: false
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          display: true,
          stacked: true,
          barPercentage: 0.25,
          barThickness: 15,
          ticks: {
            display: true
          },
          grid: {
            display: false,
            drawBorder: false,
          },
          border: {
            display: false,
          },
        },
        y: {
          display: true,
          stacked: true,
          grid: {
            display: false,
            drawBorder: false,
          },
          border: {
            display: false,
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
    new Chart('basicline', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }

}
