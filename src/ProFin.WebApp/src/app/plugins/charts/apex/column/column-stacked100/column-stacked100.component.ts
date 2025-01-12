import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-column-stacked100',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './column-stacked100.component.html',
  styleUrl: './column-stacked100.component.css'
})
export class ColumnStacked100Component {
  chartOptions = {
    series: [
      {
        name: "PRODUCT A",
        data: [44, 55, 41, 67, 22, 43, 21, 49]
      },
      {
        name: "PRODUCT B",
        data: [13, 23, 20, 8, 13, 27, 33, 12]
      },
      {
        name: "PRODUCT C",
        data: [11, 17, 15, 15, 21, 14, 15, 13]
      }
    ],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      stackType: "100%",
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true
      }
    },

    colors:["var(--primary)", "#00e396", "#febb3b"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false
      }
    },
    xaxis: {
      categories: [
        "2011 Q1",
        "2011 Q2",
        "2011 Q3",
        "2011 Q4",
        "2012 Q1",
        "2012 Q2",
        "2012 Q3",
        "2012 Q4"
      ]
    },
    legend: {
      show: false,
      position: "right",
      offsetY: 40
    },
    fill: {
      opacity: 1
    }
  }
}
