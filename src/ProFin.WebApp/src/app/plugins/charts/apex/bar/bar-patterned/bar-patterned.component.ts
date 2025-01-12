import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexPlotOptions,
  ApexYAxis,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexFill,
  ApexStates,
  NgApexchartsModule,
} from "ng-apexcharts";
@Component({
  selector: 'app-bar-patterned',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './bar-patterned.component.html',
  styleUrl: './bar-patterned.component.css'
})
export class BarPatternedComponent {
  series: ApexAxisChartSeries = [
    {
      name: "Marine Sprite",
      data: [44, 55, 41, 37, 22, 43, 21]
    },
    {
      name: "Striking Calf",
      data: [53, 32, 33, 52, 13, 43, 32]
    },
    {
      name: "Tank Picture",
      data: [12, 17, 11, 9, 15, 11, 20]
    },
    {
      name: "Bucket Slope",
      data: [9, 7, 5, 8, 6, 9, 4]
    }
  ]
  chart: ApexChart = {
    type: "bar",
    height: 350,
    stacked: true,
    dropShadow: {
      enabled: true,
      blur: 1,
      opacity: 0.25
    },
    toolbar: {
      show: false
    }
  }
  
  plotOptions: ApexPlotOptions = {
    bar: {
      horizontal: true,
      barHeight: "60%"
    }
  }
  colors:any[] = ["#0e8a74", "#ff5c00", "#febb3b", "red"]
  dataLabels: ApexDataLabels = {
    enabled: false
  }
  stroke: ApexStroke = {
    width: 2
  }
  xaxis: ApexXAxis = {
    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014]
  }
  yaxis: ApexYAxis = {
    title: {
      text: undefined
    }
  }
  tooltip: ApexTooltip = {
    shared: false,
    y: {
      formatter: function (val) {
        return val + "K";
      }
    }
  }
  fill: ApexFill = {
    type: "pattern",
    opacity: 1
  }
  states: ApexStates = {
    hover: {
      filter: {
        type: "none"
      }
    }
  }
  legend: ApexLegend = {
    show: false,
    position: "right",
    offsetY: 40
  }
}
