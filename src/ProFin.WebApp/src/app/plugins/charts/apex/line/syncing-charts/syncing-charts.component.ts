import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexStroke,
  ApexDataLabels,
  ApexMarkers,
  ApexYAxis,
  ApexTooltip,
  ApexGrid,
  ApexXAxis,
  NgApexchartsModule
} from "ng-apexcharts";
@Component({
  selector: 'app-syncing-charts',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './syncing-charts.component.html',
  styleUrl: './syncing-charts.component.css'
})
export class SyncingChartsComponent {

  ts2: any = 1484418600000;
  dates1: any = [];
  dates2: any = [];
  dates3: any = [];
  ngOnInit() {
    for (let i = 0; i < 20; i++) {
      this.ts2 = this.ts2 + 86400000;
      this.dates1.push([this.ts2, (Math.random() * 50)]);
      this.dates2.push([this.ts2, (Math.random() * 50)]);
      this.dates3.push([this.ts2, (Math.random() * 50)]);
    }
  }

  dataLabels: ApexDataLabels = {
    enabled: false
  }
  stroke: ApexStroke = {
    curve: "straight"
  }

  markers: ApexMarkers = {
    size: 6,
    hover: {
      size: 10
    }
  }
  tooltip: ApexTooltip = {
    followCursor: false,
    theme: "dark",
    x: {
      show: false
    },
    marker: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return "";
        }
      }
    }
  }
  grid: any = {
    clipMarkers: false
  }
  xaxis: ApexXAxis = {
    type: "datetime"
  }

  // First Chart -- 
  series1: ApexAxisChartSeries = [
    {
      name: "chart1",
      data: this.dates1
    }
  ]
  chart1: ApexChart = {
    id: "fb",
    group: "social",
    type: "line",
    height: 160,
    toolbar: {
      show: false,
    },
  }
  colors1: string[] = ["var(--primary)"]
  yaxis1: ApexYAxis = {
    show: false,
    tickAmount: 2,
  }

  // Sec. Chart -- 
  series2: ApexAxisChartSeries = [
    {
      name: "chart1",
      data: this.dates2
    }
  ]
  chart2: ApexChart = {
    id: "tw",
    group: "social",
    type: "line",
    height: 160,
    toolbar: {
      show: false,
    },
  }
  colors2: string[] = ["#febc3b"]
  yaxis2: ApexYAxis = {
    show: false,
    tickAmount: 2,
  }

  // Ther. Chart -- 
  series3: ApexAxisChartSeries = [
    {
      name: "chart1",
      data: this.dates3
    }
  ]
  chart3: ApexChart = {
    id: "yt",
    group: "social",
    type: "area",
    height: 160,
    toolbar: {
      show: false,
    },
  }
  colors3: string[] = ["#00E396"]
  yaxis3: ApexYAxis = {
    show: false,
    tickAmount: 2,
  }
}
