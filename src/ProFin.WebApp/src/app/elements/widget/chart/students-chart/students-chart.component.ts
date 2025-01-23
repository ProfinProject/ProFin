import { Component } from '@angular/core';
import { PieChartApexComponent } from '../../../chart-config/pie-chart-apex/pie-chart-apex.component';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-students-chart',
  standalone: true,
  imports: [BarChartApexComponent, PieChartApexComponent],
  templateUrl: './students-chart.component.html',
  styleUrl: './students-chart.component.css'
})
export class StudentsChartComponent {
  pieOptions = {
    series: [51, 24, 61],
    chart: {
      width: 160,
      type: "pie"
    },
    labels: ["(37.5%)", "(17.6%)", "(44.9%)",],
    stroke: {
      width: 0,
    },
    colors: ['#7099ed', '#b3ccff', '#9dbdff'],

    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          labelInterpolationFnc: function (value: any) {
            return value[0]
          }
        }
      }
    ]
  };


  barOptions = {
    series: [
      {
        name: "basic",
        data: [33, 22, 68, 54, 8, 30, 74, 7, 36, 5, 41, 19, 43, 29, 38]
      }
    ],
    chart: {
      type: "bar",
      height: 150,
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      },

      animations: {
        enabled: true,
        easing: 'linear',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },

    colors: ["#FFCE78"],

    stroke: {
      show: false,
      width: 2,
      colors: ["transparent"]
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany"
      ]
    }
  };
}
