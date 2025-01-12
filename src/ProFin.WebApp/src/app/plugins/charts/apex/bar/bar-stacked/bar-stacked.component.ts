import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-bar-stacked',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './bar-stacked.component.html',
  styleUrl: './bar-stacked.component.css'
})
export class BarStackedComponent {
  chartOptions = {
    series: [
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
      },
      {
        name: "Reborn Kid",
        data: [25, 12, 19, 32, 25, 24, 10]
      }
    ],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      }
    },
  
    colors:["var(--primary)", "#febc3b", "#febb3b", "#ff6077", "#8b75d7"],
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    stroke: {
      width: 1,
      colors: ["#fff"]
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      labels: {
        formatter: function(val:any) {
          return val + "K";
        }
      }
    },
    yaxis: {
      title: {
        text: undefined
      }
    },
    tooltip: {
      y: {
        formatter: function(val:any) {
          return val + "K";
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
      offsetX: 40
    }
  };
}
