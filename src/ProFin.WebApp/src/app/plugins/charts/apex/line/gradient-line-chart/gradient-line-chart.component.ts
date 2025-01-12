import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexStroke,
  ApexMarkers,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  ApexYAxis,
  NgApexchartsModule
} from "ng-apexcharts";
@Component({
  selector: 'app-gradient-line-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './gradient-line-chart.component.html',
  styleUrl: './gradient-line-chart.component.css'
})
export class GradientLineChartComponent {

  series: ApexAxisChartSeries = [
    {
      name: "Likes",
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    }
  ]
  chart: ApexChart = {
    height: 350,
    type: "line",
    toolbar: {
      show: false,
    },
  }
  stroke: ApexStroke = {
    width: 7,
    curve: "smooth"
  }
  //labels:any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
 
  xaxis: ApexXAxis = {
    type: "datetime",
    categories: [
      "1/11/2000",
      "2/11/2000",
      "3/11/2000",
      "4/11/2000",
      "5/11/2000",
      "6/11/2000",
      "7/11/2000",
      "8/11/2000",
      "9/11/2000",
      "10/11/2000",
      "11/11/2000",
      "12/11/2000",
      "1/11/2001",
      "2/11/2001",
      "3/11/2001",
      "4/11/2001",
      "5/11/2001",
      "6/11/2001"
    ]
  }

  fill: ApexFill = {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#FDD835"],
      shadeIntensity: 1,
      type: "horizontal",
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100]
    }
  }
  markers: ApexMarkers = {
    size: 4,
    colors: ["var(--primary)"],
    strokeColors: "#fff",
    strokeWidth: 2,
    hover: {
      size: 7
    }
  }
  yaxis: ApexYAxis = {
    min: -10,
    max: 40,
    title: {
      text: "Engagement"
    }
  }
}
