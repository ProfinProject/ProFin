import { Component } from '@angular/core';
import { PieChartApexComponent } from '../../../../../elements/chart-config/pie-chart-apex/pie-chart-apex.component';

@Component({
  selector: 'app-radialbar-multiple',
  standalone: true,
  imports: [PieChartApexComponent],
  templateUrl: './radialbar-multiple.component.html',
  styleUrl: './radialbar-multiple.component.css'
})
export class RadialbarMultipleComponent {
  chartOptions = {
    series: [44, 55, 67, 83],
    chart: {
      height: 350,
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px"
          },
          value: {
            fontSize: "16px"
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w:any) {
              return "249";
            }
          }
        }
      }
    },
    colors:["var(--primary)", "#febb3b", "#00e396", "#ff6077", "#8b75d7"],
    labels: ["Apples", "Oranges", "Bananas", "Berries"]
  };
}
