import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-top-product-2',
  standalone: true,
  imports: [],
  templateUrl: './top-product-2.component.html',
  styleUrl: './top-product-2.component.css'
})
export class TopProduct2Component {
  chartjs_bar = {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [{
        label: "Sales Stats",
        backgroundColor: "#2780d4",
        borderColor: '#2780d4',
        pointBackgroundColor: '#2780d4',
        pointBorderColor: '#2780d4',
        pointHoverBackgroundColor: '#2780d4',
        pointHoverBorderColor: '#2780d4',
        borderWidth: 0,
        data: [20, 10, 18, 10, 32, 15, 15, 22, 18, 6, 12, 13],
        fill: true,
      }]
    },
    options: {
      plugins: {
        legend: {
          display: !1
        },
      },
      title: {
        display: !1
      },
      tooltips: {
        intersect: !1,
        mode: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
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
          }
        }
      },
      elements: {
        line: {
          tension: .7
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
    new Chart('chart_widget_10', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
