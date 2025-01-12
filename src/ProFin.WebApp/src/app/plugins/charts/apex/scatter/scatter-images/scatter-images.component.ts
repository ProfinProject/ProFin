import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexMarkers,
  ApexFill,
  ApexLegend,
  NgApexchartsModule,
} from "ng-apexcharts";
@Component({
  selector: 'app-scatter-images',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './scatter-images.component.html',
  styleUrl: './scatter-images.component.css'
})
export class ScatterImagesComponent {

    series: ApexAxisChartSeries = [
      {
        name: "Image2",
        data: [
          [16.4, 5.4],
          [21.7, 4],
          [25.4, 3],
          [19, 2],
          [10.9, 1],
          [23.6, 3.2],
          [13.9, 7],
          [10.9, 8.2],
          [16.4, 4],
          [13.6, 4.3],
          [13.6, 12],
          [29.9, 3],
          [10.9, 5.2],
          [28.4, 6.5],
          [10.9, 8],
          [24.5, 7.1],
          [10.9, 7],
          [8.1, 4.7],
          [13, 10],
          [27.1, 10],
          [24.5, 8],
          [27.1, 3],
          [29.9, 11.5],
          [27.1, 0.8],
          [22.1, 2]
        ]
      },
      {
        name: "Image2",
        data: [
          [6.4, 5.4],
          [11.7, 4],
          [10, 10],
          [27.1, 10],
          [15.4, 3],
          [9, 2],
          [19, 11],
          [20.9, 7],
          [1.9, 8.2],
          [3.9, 7],
          [10.9, 8.2],
          [16.4, 4],
          [6.4, 14],
          [25.4, 3],
          [12, 2],
          [11.6, 12]
        ]
      }
    ]
    chart: ApexChart = {
      height: 350,
      type: "scatter",
      animations: {
        enabled: false
      },
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    }
    xaxis: ApexXAxis = {
      tickAmount: 10,
      min: 0,
      max: 40,
      labels: {
        rotate: 0,
        trim: false
      }
    }
    yaxis: ApexYAxis = {
      tickAmount: 7
    }


    colors: String[] = ["#4D72AA", "#9DD6FF"]

    markers: ApexMarkers = {
      size: 20
    }
    fill: ApexFill = {
      type: "image",
      opacity: 1,
      image: {
        src: [
          "https://freesvg.org/img/Simple-Water-Icon.png",
          "assets/images/fb.png"
        ],
        width: 40,
        height: 40
      }
    }
    legend: ApexLegend = {
      labels: {
        useSeriesColors: true
      },
      markers: {

      }
    }
}
