import { Component, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-doughnut-chart-js',
  standalone: true,
  imports: [],
  templateUrl: './doughnut-chart-js.component.html',
  styleUrl: './doughnut-chart-js.component.css'
})
export class DoughnutChartJsComponent {
  @Input() chartOptions: any = '';
  @Input() index: any = '';
  style = getComputedStyle(document.body)
  chartCol = getComputedStyle(document.body).getPropertyValue('--primary');
  ngOnInit() {
    const cricleChart = {
      datasets: [{
        data: [this.chartOptions, 100 - this.chartOptions],
        backgroundColor: [
          this.chartCol,
          '#ececec',
        ],
        borderWidth: 0,
        hoverOffset: 4
      }],
      options: {
        cutout: '50%',
      },
    };
    setTimeout(() => {
      new Chart(`doughnutChart${this.index}`, {
        type: 'doughnut',
        data: cricleChart,
        options: cricleChart.options
      });
    }, 500);
  }

}
