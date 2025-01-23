import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-column-loaded-chart',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './column-loaded-chart.component.html',
  styleUrl: './column-loaded-chart.component.css'
})
export class ColumnLoadedChartComponent {
  chartOptions = {
    series: [
      {
        name: "distibuted",
        data: [200, 550, 400, 300, 580, 450, 250, 150]
      }
    ],
    chart: {
      id: "barQuarter",
      height: 400,
      width: "100%",
      type: "bar",
      stacked: true,
      toolbar: {
        show: false
      }
    },
    colors: [
      "var(--primary)",
      "#00E396",
      "#FEB019",
      "#FF4560",
      "#775DD0",
      "#546E7A",
      "#26a69a",
      "#D10CE8"
    ],
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: true,
        barHeight: "75%",
        dataLabels: {
          position: "bottom"
        }
      }
    },
    dataLabels: {
      enabled: true,
      textAnchor: "start",
      style: {
        colors: ["#fff"]
      },
      formatter: function (val: any, opt: any) {
        return opt.w.globals.labels[opt.dataPointIndex];
      },
      offsetX: 0,
      dropShadow: {
        enabled: true
      }
    },
    legend: {
      show: false
    },
    grid: {
      yaxis: {
        lines: {
          show: false
        }
      },
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      categories: [
        ["2011"],
        ["2012"],
        ["2013"],
        ["2014"],
        ["2015"],
        ["2016"],
        ["2017"],
        ["2018"]
      ],
      labels: {
        style: {
          colors: [
            "#008FFB",
            "#00E396",
            "#FEB019",
            "#FF4560",
            "#775DD0",
            "#546E7A",
            "#26a69a",
            "#D10CE8"
          ],
          fontSize: "12px"
        }
      }
    },
    states: {
      normal: {
        filter: {
          type: "desaturate"
        }
      },
      active: {
        allowMultipleDataPointsSelection: true,
        filter: {
          type: "darken",
          value: 1
        }
      }
    },
    tooltip: {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function (val: any, opts: any) {
            return opts.w.globals.labels[opts.dataPointIndex];
          }
        }
      }
    },
    subtitle: {
      text: "(Click on bar to see details)",
      offsetX: 15
    },
    yaxis: {
      labels: {
        show: false
      }
    }
  }
}
