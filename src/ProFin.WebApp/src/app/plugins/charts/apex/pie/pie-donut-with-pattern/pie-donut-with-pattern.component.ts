import { Component } from '@angular/core';
import { PieChartApexComponent } from '../../../../../elements/chart-config/pie-chart-apex/pie-chart-apex.component';

@Component({
  selector: 'app-pie-donut-with-pattern',
  standalone: true,
  imports: [PieChartApexComponent],
  templateUrl: './pie-donut-with-pattern.component.html',
  styleUrl: './pie-donut-with-pattern.component.css'
})
export class PieDonutWithPatternComponent {
  chartOptions = {
    series: [44, 55, 41, 17, 15],
    chart: {
      width: 400,
      type: "donut",
      dropShadow: {
        enabled: true,
        color: "#111",
        top: -1,
        left: 3,
        blur: 3,
        opacity: 0.2
      }
    },
    stroke: {
      width: 0
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true
            }
          }
        }
      }
    },
    colors:["var(--primary)", "#febb3b", "#00e396", "#ff6077", "#8b75d7"],

    labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
    dataLabels: {
      dropShadow: {
        blur: 3,
        opacity: 0.8
      }
    },
    fill: {
      type: "pattern",
      opacity: 1,
      pattern: {
        enabled: true,
        style: [
          "verticalLines",
          "squares",
          "horizontalLines",
          "circles",
          "slantedLines"
        ]
      }
    },
    states: {
      hover: {
        filter: {
          type: "none"
        }
      }
    },
    theme: {
      palette: "palette2"
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };
}
