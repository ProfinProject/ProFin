import { Component } from '@angular/core';
import { PieChartApexComponent } from '../../../../../elements/chart-config/pie-chart-apex/pie-chart-apex.component';

@Component({
  selector: 'app-polar-area-basic',
  standalone: true,
  imports: [PieChartApexComponent],
  templateUrl: './polar-area-basic.component.html',
  styleUrl: './polar-area-basic.component.css'
})
export class PolarAreaBasicComponent {
  chartOptions = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: {
      width: 400,
      type: "polarArea"
    },
    stroke: {
      colors: ["#fff"]
    },
    colors:["var(--primary)", "#00e396", "#febb3b", "#ff6077", "#8b75d7"],

    fill: {
      opacity: 0.8
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          },
          legend: {
            show:false,
            position: "bottom"
          }
        }
      }
    ]
  };
}
