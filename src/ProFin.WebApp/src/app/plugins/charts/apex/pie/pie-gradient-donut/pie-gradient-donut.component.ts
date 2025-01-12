import { Component } from '@angular/core';
import { PieChartApexComponent } from '../../../../../elements/chart-config/pie-chart-apex/pie-chart-apex.component';

@Component({
  selector: 'app-pie-gradient-donut',
  standalone: true,
  imports: [PieChartApexComponent],
  templateUrl: './pie-gradient-donut.component.html',
  styleUrl: './pie-gradient-donut.component.css'
})
export class PieGradientDonutComponent {
  chartOptions = {
    series: [44, 55, 41, 17, 15],
    chart: {
      width: 400,
      type: "donut"
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: "gradient"
    },
    legend: {
      formatter: function(val:any, opts:any) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex];
      }
    },
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
