import { Component } from '@angular/core';
import { PieChartApexComponent } from '../../../../../elements/chart-config/pie-chart-apex/pie-chart-apex.component';

@Component({
  selector: 'app-pie-simple',
  standalone: true,
  imports: [PieChartApexComponent],
  templateUrl: './pie-simple.component.html',
  styleUrl: './pie-simple.component.css'
})
export class PieSimpleComponent {
  chartOptions = {
    series: [44, 55, 13, 43, 22],
    chart: {
      width: 400,
      type: "pie"
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
            position: "bottom"
          }
        }
      }
    ]
  };
}
