import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-column-with-markers',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './column-with-markers.component.html',
  styleUrl: './column-with-markers.component.css'
})
export class ColumnWithMarkersComponent {
  chartOptions = {
    series: [
      {
        name: "Actual",
        data: [

          {
            x: "2015",
            y: 8133,
            goals: [
              {
                name: "Expected",
                value: 6600,
                strokeWidth: 20,
                strokeColor: "#ff5c00"
              }
            ]
          },
          {
            x: "2011",
            y: 1292,
            goals: [
              {
                name: "Expected",
                value: 1400,
                strokeWidth: 20,
                strokeColor: "#ff5c00"
              }
            ]
          },
          {
            x: "2012",
            y: 4432,
            goals: [
              {
                name: "Expected",
                value: 5400,
                strokeWidth: 20,
                strokeColor: "#ff5c00"
              }
            ]
          },
          {
            x: "2013",
            y: 5423,
            goals: [
              {
                name: "Expected",
                value: 5200,
                strokeWidth: 20,
                strokeColor: "#febb3b"
              }
            ]
          },
          {
            x: "2014",
            y: 6653,
            goals: [
              {
                name: "Expected",
                value: 6500,
                strokeWidth: 20,
                strokeColor: "#ff5c00"
              }
            ]
          },
          {
            x: "2015",
            y: 8133,
            goals: [
              {
                name: "Expected",
                value: 6600,
                strokeWidth: 20,
                strokeColor: "#ff5c00"
              }
            ]
          },
          {
            x: "2016",
            y: 7132,
            goals: [
              {
                name: "Expected",
                value: 7500,
                strokeWidth: 20,
                strokeColor: "#ff5c00"
              }
            ]
          },
          {
            x: "2017",
            y: 7332,
            goals: [
              {
                name: "Expected",
                value: 8700,
                strokeWidth: 20,
                strokeColor: "#febb3b"
              }
            ]
          },
          {
            x: "2014",
            y: 6653,
            goals: [
              {
                name: "Expected",
                value: 6500,
                strokeWidth: 20,
                strokeColor: "#ff5c00"
              }
            ]
          },
          {
            x: "2015",
            y: 8133,
            goals: [
              {
                name: "Expected",
                value: 6600,
                strokeWidth: 20,
                strokeColor: "#ff5c00"
              }
            ]
          },
          {
            x: "2018",
            y: 6553,
            goals: [
              {
                name: "Expected",
                value: 7300,
                strokeWidth: 20,
                strokeColor: "#ff5c00"
              }
            ]
          }
        ]
      }
    ],
    chart: {
      height: 350,
      type: "bar",
      toolbar:{
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: "60%"
      }
    },
    colors: ["var(--primary)"],
    dataLabels: {
      enabled: false
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      customLegendItems: ["Actual", "Expected"],
      markers: {
        fillColors: ["#ff5c00", "#febb3b"]
      }
    }
  };
}
