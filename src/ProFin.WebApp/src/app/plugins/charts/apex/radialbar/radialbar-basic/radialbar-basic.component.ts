import { Component } from '@angular/core';
import { PieChartApexComponent } from '../../../../../elements/chart-config/pie-chart-apex/pie-chart-apex.component';

@Component({
  selector: 'app-radialbar-basic',
  standalone: true,
  imports: [PieChartApexComponent],
  templateUrl: './radialbar-basic.component.html',
  styleUrl: './radialbar-basic.component.css'
})
export class RadialbarBasicComponent {
  chartOptions = {
    series: [70],
    chart: {
      height: 350,
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "16px",
            color: undefined,
            offsetY: 120
          },
          value: {
            offsetY: 76,
            fontSize: "22px",
            color: undefined,
            formatter: function(val:any) {
              return val + "%";
            }
          }
        }
      }
    },
    colors:["var(--primary)"],
    labels: ["Cricket"]
  };
}
