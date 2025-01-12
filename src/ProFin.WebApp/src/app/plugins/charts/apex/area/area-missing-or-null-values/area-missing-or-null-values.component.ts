import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-area-missing-or-null-values',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './area-missing-or-null-values.component.html',
  styleUrl: './area-missing-or-null-values.component.css'
})
export class AreaMissingOrNullValuesComponent {
  chartOptions = {
    series: [
      {
        name: "Peter",
        data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9]
      },
      {
        name: "Johnny",
        data: [
          10,
          15,
          null,
          12,
          null,
          10,
          12,
          15,
          null,
          null,
          12,
          null,
          14,
          null,
          null,
          null
        ]
      },
      {
        name: "David",
        data: [
          null,
          null,
          null,
          null,
          3,
          4,
          1,
          3,
          4,
          6,
          7,
          9,
          5,
          null,
          null,
          null
        ]
      }
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      },
      animations: {
        enabled: false
      },
      toolbar: {
        show: false
      },
      stroke: {
        curve: "straight"
      }
    },
    colors: ['#3443da', '#febc3b', '#00e396'],
    stroke: {
      curve: "straight"
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  };
}
