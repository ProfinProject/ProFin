import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph-revenue',
  standalone: true,
  imports: [],
  templateUrl: './graph-revenue.component.html',
  styleUrl: './graph-revenue.component.css'
})
export class GraphRevenueComponent {
  labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April"];

  style = getComputedStyle(document.body)
  chartCol = getComputedStyle(document.body).getPropertyValue('--primary');


  chartjs_bar = {
    type: 'line',
    data: {
      labels: this.labels,
      datasets: [{
        label: "Sales Stats",
        backgroundColor: ['rgba(33, 48, 184, .08)'],
        borderColor: this.chartCol,
        pointBackgroundColor: '#2130b8',
        pointBorderColor: '#2130b8',
        borderWidth: 2,
        pointHoverBackgroundColor: '#2130b8',
        pointHoverBorderColor: '#2130b8',
        data: [8, 7, 6, 3, 2, 4, 6, 8, 12, 6, 12, 13, 10, 18, 14, 24, 16, 12, 19, 21, 16, 14, 24, 21, 13, 15, 27, 29, 21, 11, 14, 19, 21, 17],
        fill: true,
      }]
    },
    options: {
      title: {
        display: !1
      },
      plugins: {
        legend: false,
      },
      tooltips: {
        intersect: !1,
        mode: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      legend: {
        display: !1
      },
      responsive: !0,
      maintainAspectRatio: !1,
      hover: {
        mode: "index"
      },
      scales: {
        x: {
          display: !1,
          gridLines: !1,
          scaleLabel: {
            display: !0,
            labelString: "Month"
          }
        },
        y: {
          display: !1,
          gridLines: !1,
          scaleLabel: {
            display: !0,
            labelString: "Value"
          },
          ticks: {
            beginAtZero: !0
          },
        }
      },
      elements: {
        line: {
          tension: .15
        },
        point: {
          radius: 0,
          borderWidth: 0
        }
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 5,
          bottom: 0
        }
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    setTimeout(() => {
      new Chart('revenueChart', {
        type: this.all_data.type,
        data: this.all_data.data,
        options: this.all_data.options,
      });
    }, 100);
  }
}
