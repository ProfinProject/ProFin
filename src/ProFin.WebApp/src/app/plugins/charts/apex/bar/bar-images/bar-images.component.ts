import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexYAxis,
  ApexDataLabels,
  ApexStroke,
  ApexTitleSubtitle,
  ApexFill,
  ApexGrid,
  NgApexchartsModule,
} from "ng-apexcharts";

@Component({
  selector: 'app-bar-images',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './bar-images.component.html',
  styleUrl: './bar-images.component.css'
})
export class BarImagesComponent {
  series: ApexAxisChartSeries = [
    {
      name: "coins",
      data: [
        5,
        6,
        7,
        8,
        9,
        9,
        9,
        10,
        10,
        11,
        12,
        12,
        12,
        13,
        13,
        15,
        12,
        12,
        13,
        14,
        16,
        14,
        12,
        18,
        19,
        17,
        16,
        19,
        20,
        24,
        23,
        23,
        23,
        24,
        26,
        27,
        28,
        30
      ]
    }
  ]
  chart: ApexChart = {
    type: "bar",
    height: 410,
    animations: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  }
  plotOptions: ApexPlotOptions = {
    bar: {
      horizontal: true,
      barHeight: "100%"
    }
  }
  dataLabels: ApexDataLabels = {
    enabled: false
  }
  stroke: ApexStroke = {
    colors: ["#fff"],
    width: 0.2
  }
  labels: number[] = Array.apply(null,).map(function (el, index) {
    return index + 1;
  })
  yaxis: ApexYAxis = {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false
    },
    title: {
      text: "Weight"
    }
  }
  grid: ApexGrid = {
    position: "back"
  }
  fill: ApexFill = {
    type: "image",
    opacity: 0.87,
    image: {
      src: [
        "assets/images/5.jpg"
      ],
      width: 615,
      height: 410
    }
  }
}
