import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-zoomable-timeseries',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './zoomable-timeseries.component.html',
  styleUrl: './zoomable-timeseries.component.css'
})
export class ZoomableTimeseriesComponent {
  ts2: any = 1484418600000;
  dates: any = [];
  ngOnInit() {
    for (let i = 0; i < 20; i++) {
      this.ts2 = this.ts2 + 86400000;
      this.dates.push([this.ts2, (Math.random() * 100)]);
    }
  }
  chartOptions = {
    series: [
      {
        name: "XYZ MOTORS",
        data: this.dates
      }
    ],
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false
    },
    colors:["var(--primary)"],
    markers: {
      size: 0
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    },
    yaxis: {
      labels: {
        formatter: function (val: any) {
          return (val / 1000000).toFixed(1);
        }
      },
      title: {
        text: "Price"
      }
    },
    xaxis: {
      type: "datetime"
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val: any) {
          return (val / 1000000).toFixed(0);
        }
      }
    }
  }
}
