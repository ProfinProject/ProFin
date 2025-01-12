import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-timeline-multiple-series',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './timeline-multiple-series.component.html',
  styleUrl: './timeline-multiple-series.component.css'
})
export class TimelineMultipleSeriesComponent {
  chartOptions = {
    series: [
      {
        name: "Bob",
        data: [
          {
            x: "Design",
            y: [
              new Date("2019-03-05").getTime(),
              new Date("2019-03-08").getTime()
            ]
          },
          {
            x: "Code",
            y: [
              new Date("2019-03-02").getTime(),
              new Date("2019-03-05").getTime()
            ]
          },
          {
            x: "Code",
            y: [
              new Date("2019-03-05").getTime(),
              new Date("2019-03-07").getTime()
            ]
          },
          {
            x: "Test",
            y: [
              new Date("2019-03-03").getTime(),
              new Date("2019-03-09").getTime()
            ]
          },
          {
            x: "Test",
            y: [
              new Date("2019-03-08").getTime(),
              new Date("2019-03-11").getTime()
            ]
          },
          {
            x: "Validation",
            y: [
              new Date("2019-03-11").getTime(),
              new Date("2019-03-16").getTime()
            ]
          },
          {
            x: "Design",
            y: [
              new Date("2019-03-01").getTime(),
              new Date("2019-03-03").getTime()
            ]
          }
        ]
      },
      {
        name: "Joe",
        data: [
          {
            x: "Design",
            y: [
              new Date("2019-03-02").getTime(),
              new Date("2019-03-05").getTime()
            ]
          },
          {
            x: "Test",
            y: [
              new Date("2019-03-06").getTime(),
              new Date("2019-03-16").getTime()
            ]
          },
          {
            x: "Code",
            y: [
              new Date("2019-03-03").getTime(),
              new Date("2019-03-07").getTime()
            ]
          },
          {
            x: "Deployment",
            y: [
              new Date("2019-03-20").getTime(),
              new Date("2019-03-22").getTime()
            ]
          },
          {
            x: "Design",
            y: [
              new Date("2019-03-10").getTime(),
              new Date("2019-03-16").getTime()
            ]
          }
        ]
      },
      {
        name: "Dan",
        data: [
          {
            x: "Code",
            y: [
              new Date("2019-03-10").getTime(),
              new Date("2019-03-17").getTime()
            ]
          },
          {
            x: "Validation",
            y: [
              new Date("2019-03-05").getTime(),
              new Date("2019-03-09").getTime()
            ]
          }
        ]
      }
    ],
    chart: {
      height: 450,
      type: "rangeBar",
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "80%"
      }
    },
    xaxis: {
      type: "datetime"
    },
    
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 100, 100]
      }
    },
    legend: {
      position: "top",
      horizontalAlign: "left"
    }
  };
}
