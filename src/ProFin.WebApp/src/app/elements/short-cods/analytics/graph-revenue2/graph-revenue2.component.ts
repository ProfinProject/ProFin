import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph-revenue2',
  standalone: true,
  imports: [
    BarChartApexComponent
  ],
  templateUrl: './graph-revenue2.component.html',
  styleUrl: './graph-revenue2.component.css'
})
export class GraphRevenue2Component {

  style = getComputedStyle(document.body)
  chartCol = getComputedStyle(document.body).getPropertyValue('--primary');

  chartjs_bar = {
    type: 'line',
    data: {
      defaultFontFamily: 'Poppins',
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "My First dataset",
          data: [25, 20, 50, 41, 55, 45, 70],
          borderColor: this.chartCol,
          borderWidth: "4",
          tension: 0.5,
        }
      ]
    },
    options: {
      plugins: {
        legend: false,
      },
      legend: false,
      scales: {
        y: {
          max: 100,
          min: 0,
          ticks: {
            beginAtZero: true,

            stepSize: 20,
            padding: 0,
            grid: {
              drawBorder: false,
            }
          },
          grid: {
            color: '#8a8eb95c',
          },
        },
        x: {
          ticks: {
            padding: 0,
          },
          grid: {
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
    new Chart('areaChart_2', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
