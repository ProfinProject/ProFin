import { Component } from '@angular/core';
import { PieChartApexComponent } from '../../../../../elements/chart-config/pie-chart-apex/pie-chart-apex.component';

@Component({
  selector: 'app-pie-donut',
  standalone: true,
  imports: [PieChartApexComponent],
  templateUrl: './pie-donut.component.html',
  styleUrl: './pie-donut.component.css'
})
export class PieDonutComponent {
  chartOptions = {
    series: [44, 55, 13, 43, 22],
    chart: {
      type: "donut",
      width: 400,
    },

    colors:["var(--primary)", "#febb3b", "#00e396", "#ff6077", "#8b75d7"],
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: "bottom",
            show: true,
          },
          dataLabels: {
            enabled: false,
          },
        }
      }
    ]
  }
}
