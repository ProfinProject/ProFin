import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-horizontal-chartjs',
  standalone: true,
  imports: [],
  templateUrl: './horizontal-chartjs.component.html',
  styleUrl: './horizontal-chartjs.component.css'
})
export class HorizontalChartjsComponent {
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  chartjs_bar = {
    type: 'bar',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'Fully Rounded',
          data: [65, -59, 80, 81, -56, -55, 40, 56, -35, -70],
          borderColor: '#222fb9',
          backgroundColor: '#222fb9',
          borderWidth: 2,
          borderRadius: Number.MAX_VALUE,
          borderSkipped: false,
        },
        {
          label: 'Small Radius',
          data: [65, -59, 80, -81, 56, 55, -40, -54, 60, 25],
          borderColor: '#febb3b',
          backgroundColor: '#febb3b',
          borderWidth: 2,
          borderRadius: 5,
          borderSkipped: false,
        },
      ]
    },
    options: {
      indexAxis: 'y',
      elements: {
        bar: {
          borderWidth: 2,
        }
      },
      responsive: true,
      plugins: {
        legend: {
          show:false
        }
      },
      scales: {
        y: {
          grid: {
            color: '#8a8eb95c',
          },
        },
        x:{
          grid: {
            color: '#8a8eb95c',
          },
        }
      },
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('herizontalChart', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
