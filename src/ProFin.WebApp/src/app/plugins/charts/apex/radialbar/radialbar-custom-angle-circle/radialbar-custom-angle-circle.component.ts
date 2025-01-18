import { Component } from '@angular/core';
import { PieChartApexComponent } from '../../../../../elements/chart-config/pie-chart-apex/pie-chart-apex.component';

@Component({
  selector: 'app-radialbar-custom-angle-circle',
  standalone: true,
  imports: [PieChartApexComponent],
  templateUrl: './radialbar-custom-angle-circle.component.html',
  styleUrl: './radialbar-custom-angle-circle.component.css'
})
export class RadialbarCustomAngleCircleComponent {
  chartOptions = {
    series: [76, 67, 61, 90],
    chart: {
      height: 390,
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            show: false
          }
        }
      }
    },
    colors:["var(--primary)", "#febb3b", "#00e396", "#8b75d7"],

    labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
    legend: {
      show: true,
      floating: true,
      fontSize: "16px",
      position: "left",
      offsetX: 50,
      offsetY: 10,
      labels: {
        useSeriesColors: true
      },
      formatter: function (seriesName: any, opts: any) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        horizontal: 3
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false
          }
        }
      }
    ]
  };
}
