import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-visitor-activity',
  standalone: true,
  imports: [],
  templateUrl: './visitor-activity.component.html',
  styleUrl: './visitor-activity.component.css'
})
export class VisitorActivityComponent {

  staticData: any
  @ViewChild('chart')
  private chartRef!: ElementRef;
  private chart!: Chart;
  private readonly data: any;

  all_data: any;
  constructor() {
    this.data = [35, 18, 30, 35, 40, 20, 30, 25, 22, 20, 45, 35];
  }

  ngAfterViewInit(): void {
    this.all_data = this.chartOptions;
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: this.all_data.labels,
        datasets: [
          {
            label: "My First dataset",
            data: this.data,
            borderColor: 'rgba(255, 114, 13, 1)',
            backgroundColor: 'rgba(255, 114, 13, 1)',
          }
        ]
      },
      options: this.all_data.options
    });
  }

  updateValue(val: any) {
    if (val == 'year') {
      this.staticData = [20, 35, 60, 25, 40, 70, 30, 40, 65, 70, 60, 55];
    } else if (val == 'month') {
      this.staticData = [50, 35, 35, 45, 40, 50, 60, 80, 25, 50, 34, 60];
    } else {
      this.staticData = [35, 18, 30, 35, 40, 20, 30, 25, 22, 20, 45, 35]
    }
    this.staticData.map((val:any, i:any)=>{
      this.data[i] = this.staticData[i];
    });
    this.chart.update();
  }

  chartOptions = {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    options: {
      responsive: false,
      maintainAspectRatio: false,
      plugins: {
        legend: false,
        tooltip: {
          mode: "index",
          intersect: false,
          titleColor: "#888",
          bodyColor: "#555",
          titleFontSize: 12,
          bodyFontSize: 15,
          backgroundColor: "rgba(256,256,256,0.95)",
          displayColors: true,
          xPadding: 10,
          yPadding: 7,
          borderColor: "rgba(220, 220, 220, 0.9)",
          borderWidth: 2,
          caretSize: 6,
          caretPadding: 10
        }
      },
      scales: {
        y: {
          gridLines: {
            color: "rgba(89, 59, 219,0.1)",
            drawBorder: true
          },
          ticks: {
            fontColor: "#999",
          },
        },
        x: {
          gridLines: {
            display: false,
            zeroLineColor: "transparent"
          },
          ticks: {
            stepSize: 5,
            fontColor: "#999",
            fontFamily: "Nunito, sans-serif"
          }
        }
      },
    },
  }
}
