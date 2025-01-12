import { Component } from '@angular/core';
import { PieChartApexComponent } from '../../../../../elements/chart-config/pie-chart-apex/pie-chart-apex.component';

@Component({
  selector: 'app-radialbar-stroked-angular-gauge',
  standalone: true,
  imports: [PieChartApexComponent],
  templateUrl: './radialbar-stroked-angular-gauge.component.html',
  styleUrl: './radialbar-stroked-angular-gauge.component.css'
})
export class RadialbarStrokedAngularGaugeComponent {
  chartOptions = {
    series: [67],
    chart: {
      height: 350,
      type: "radialBar",
      offsetY: -10
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
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91]
      }
    },
    stroke: {
      dashArray: 4
    },
    colors:["#222fb9",],
    labels: ["Median Ratio"]
  };
}
