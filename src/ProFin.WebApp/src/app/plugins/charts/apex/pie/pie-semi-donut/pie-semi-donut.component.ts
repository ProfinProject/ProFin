import { Component } from '@angular/core';
import { PieChartApexComponent } from '../../../../../elements/chart-config/pie-chart-apex/pie-chart-apex.component';

@Component({
  selector: 'app-pie-semi-donut',
  standalone: true,
  imports: [PieChartApexComponent],
  templateUrl: './pie-semi-donut.component.html',
  styleUrl: './pie-semi-donut.component.css'
})
export class PieSemiDonutComponent {
  chartOptions = {
    series: [44, 55, 41, 17, 15],
    chart: {
      width: 400,
      type: "donut"
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    colors:["var(--primary)", "#febb3b", "#ff5c00", "#ff6077", "#8b75d7"],
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
    ],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10
      }
    },
    grid: {
      padding: {
        bottom: -80
      }
    }
  }
}
