import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-radar-basic',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './radar-basic.component.html',
  styleUrl: './radar-basic.component.css'
})
export class RadarBasicComponent {
  chartOptions = {
    series: [
      {
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20]
      }
    ],
    chart: {
      height: 350,
      type: "radar",
      toolbar: {
        show: false,
      }
    },
     colors:[ "#222fb9"],
    xaxis: {
      categories: ["January", "February", "March", "April", "May", "June"]
    }
  };
}
