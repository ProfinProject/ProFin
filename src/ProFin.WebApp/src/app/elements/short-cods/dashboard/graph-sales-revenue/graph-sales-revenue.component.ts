import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph-sales-revenue',
  standalone: true,
  imports: [],
  templateUrl: './graph-sales-revenue.component.html',
  styleUrl: './graph-sales-revenue.component.css'
})
export class GraphSalesRevenueComponent {
  active = 1;
  staticData: any
  @ViewChild('chart')
  private chartRef!: ElementRef;
  private chart!: Chart;
  private readonly data: any;

  all_data: any;
  constructor() {
    this.data = [50, 75, 34, 55, 25, 70, 30, 80, 30, 90, 25, 65];
  }

  style = getComputedStyle(document.body)
  chartCol = getComputedStyle(document.body).getPropertyValue('--primary');

  chartOptions = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: false,
      },

      legend: {
        display: false
      },
      scales: {
        y: {
          max: 100,
          min: 0,
          grid: {
            color: '#8a8eb95c',
            height: 50,
            drawBorder: true
          },
          ticks: {
            color: "#585858",
            stepSize: 20
          },
        },
        x: {
          barPercentage: 0.3,

          grid: {
            color: "rgba(0,0,0,0.1)",
            display: false,
            zeroLineColor: "transparent"
          },
          ticks: {
            stepSize: 50,
            fontColor: "#585858",
            fontFamily: "Nunito, sans-serif"
          }
        }
      },
      tooltips: {
        mode: "index",
        intersect: false,
        titleFontColor: "#888",
        bodyFontColor: "#555",
        titleFontSize: 12,
        bodyFontSize: 15,
        backgroundColor: "rgba(255,255,255,1)",
        displayColors: true,
        xPadding: 10,
        yPadding: 7,
        borderColor: "rgba(220, 220, 220, 1)",
        borderWidth: 1,
        caretSize: 6,
        caretPadding: 10
      }
    },
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.all_data = this.chartOptions;
      this.chart = new Chart(this.chartRef.nativeElement, {
        type: 'line',
        data: {
          labels: this.all_data.labels,
          datasets: [
            {
              label: "My First dataset",
              data: this.data,
              borderColor: this.chartCol,
              borderWidth: 5,
              backgroundColor: 'rgba(47, 76, 221, 0.05)',
              tension: 0.5,
            }
          ]
        },
        options: this.all_data.options
      });
    }, 1000);
  }

  updateValue(val: any) {
    if (val == 'year') {
      this.staticData = [20, 35, 70, 45, 40, 35, 30, 35, 10, 40, 60, 20];
    } else if (val == 'month') {
      this.staticData = [50, 35, 10, 45, 40, 50, 60, 35, 10, 70, 34, 35];
    } else {
      this.staticData = [50, 75, 34, 55, 25, 70, 30, 80, 30, 90, 25, 65]
    }
    this.staticData.map((val: any, i: any) => {
      this.data[i] = this.staticData[i];
    });
    this.chart.update();
  }
}
