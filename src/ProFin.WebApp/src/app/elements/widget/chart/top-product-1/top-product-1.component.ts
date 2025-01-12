import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-top-product-1',
  standalone: true,
  imports: [],
  templateUrl: './top-product-1.component.html',
  styleUrl: './top-product-1.component.css'
})
export class TopProduct1Component {
  chartjs_bar = {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April"],
      datasets: [{
        label: "Sales Stats",
        backgroundColor: "#2780d4",
        borderColor: '#2780d4',
        pointBackgroundColor: '#2780d4',
        pointBorderColor: '#2780d4',
        pointHoverBackgroundColor: '#2780d4',
        pointHoverBorderColor: '#2780d4',
        fill: true,

        data: [20, 10, 18, 15, 32, 18, 15, 22, 8, 6, 12, 13, 10, 18, 14, 24, 16, 12, 19, 21, 16, 14, 24, 21, 13, 15, 27, 29, 21, 11, 14, 19, 21, 17]
      }]
    },
    options: {
      title: {
        display: !1
      },

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
          tension: .15
        },
        point: {
          radius: 2,
          borderWidth: 1
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
    new Chart('chart_widget_9', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
