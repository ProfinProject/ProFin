import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-column-distributed',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './column-distributed.component.html',
  styleUrl: './column-distributed.component.css'
})
export class ColumnDistributedComponent {
  chartOptions = {  
    series: [
      {
        name: "distibuted",
        data: [21, 22, 10, 28, 16, 21, 13, 30]
      }
    ],
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false
      },
      events: {
        click: function(chart:any) {
            // console.log(chart, w, e)
          }
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
        columnWidth: "45%",
        distributed: true
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    grid: {
      show: false
    },
    xaxis: {
      categories: [
        ["John", "Doe"],
        ["Joe", "Smith"],
        ["Jake", "Williams"],
        "Amber",
        ["Peter", "Brown"],
        ["Mary", "Evans"],
        ["David", "Wilson"],
        ["Lily", "Roberts"]
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
    }
  }
}
