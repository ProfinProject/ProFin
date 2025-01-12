import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-column-dumbbell',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './column-dumbbell.component.html',
  styleUrl: './column-dumbbell.component.css'
})
export class ColumnDumbbellComponent {
  chartOptions = {
    series: [
      {
        data: [
          {
            x: "2008",
            y: [2800, 4500]
          },
          {
            x: "2009",
            y: [3200, 4100]
          },
          {
            x: "2010",
            y: [2950, 7800]
          },
          {
            x: "2011",
            y: [3000, 4600]
          },
          {
            x: "2012",
            y: [3500, 4100]
          },
          {
            x: "2013",
            y: [4500, 6500]
          },
          {
            x: "2014",
            y: [4100, 5600]
          }
        ]
      }
    ],
    chart: {
      height: 350,
      type: "rangeBar",
      zoom: {
        enabled: false
      },
      toolbar:{
        show: false
      }
    },
    colors:["var(--primary)", "#febb3b"],
    plotOptions: {
      bar: {
        isDumbbell: true,
        columnWidth: 3,
        dumbbellColors: [["var(--primary)", "#febb3b"]]
      }
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      position: "top",
      horizontalAlign: "left",
      customLegendItems: ["Product A", "Product B"]
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        gradientToColors: ["#febb3b"],
        inverseColors: true,
        stops: [0, 100]
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    xaxis: {
      tickPlacement: "on"
    }
  };
}
