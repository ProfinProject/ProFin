import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-radar-multiple-series',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './radar-multiple-series.component.html',
  styleUrl: './radar-multiple-series.component.css'
})
export class RadarMultipleSeriesComponent {
  chartOptions = {
    series: [
      {
        name: "Series Blue",
        data: [80, 50, 30, 40, 100, 20]
      },
      {
        name: "Series Green",
        data: [20, 30, 40, 80, 20, 80]
      },
      {
        name: "Series Orange",
        data: [44, 76, 78, 13, 43, 10]
      }
    ],
    chart: {
      height: 350,
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      },
      toolbar: {
        show: false,
      }
    },
    
    stroke: {
      width: 0
    },
    fill: {
      opacity: 0.4
    },
    markers: {
      size: 0
    },
    xaxis: {
      categories: ["2011", "2012", "2013", "2014", "2015", "2016"]
    }
  };
}
