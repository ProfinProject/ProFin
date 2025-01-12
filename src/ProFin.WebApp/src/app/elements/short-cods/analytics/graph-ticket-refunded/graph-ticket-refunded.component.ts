import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph-ticket-refunded',
  standalone: true,
  imports: [],
  templateUrl: './graph-ticket-refunded.component.html',
  styleUrl: './graph-ticket-refunded.component.css'
})
export class GraphTicketRefundedComponent {
  @ViewChild('chart2')
  private chartRef!: ElementRef;
  private chart!: Chart;
  private readonly data: any;

  style = getComputedStyle(document.body)
  chartCol = getComputedStyle(document.body).getPropertyValue('--primary');

  all_data: any;
  constructor() {
    this.data = [20, 30, 18, 15, 32, 18, 15, 22, 52, 60, 23, 23, 20, 18, 14, 24, 16, 12, 19, 21, 16, 14, 24, 21, 13, 15, 22, 52, 60, 24, 16, 12, 19, 21, 16, 23, 23, 15, 27];
  }

  ngAfterViewInit(): void {
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
            backgroundColor: '#707ac75c',
            fill: true,
          }
        ]
      },
      options: this.all_data.options
    });
  }
  ngOnInit() {
    setInterval(() => {
      this.data.push(
        Math.floor(10 + Math.random() * 80)
      );
      this.data.shift();
      this.chart.update();
    }, 2000);
  }

  chartOptions = {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", '11', '12', "13", "14", "15", "16", "17", "18", "19", "20"],
    options: {
      responsive: false,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          display: false,
        }
      },
      scales: {
        y: {
          display: false,
        },
        x: {
          display: false
        }
      },
      elements: {
        point: {
          radius: 0,
          borderWidth: 0
        }
      },
    },
  }
}
