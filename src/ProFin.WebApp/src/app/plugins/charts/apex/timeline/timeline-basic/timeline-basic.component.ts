import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-timeline-basic',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './timeline-basic.component.html',
  styleUrl: './timeline-basic.component.css'
})
export class TimelineBasicComponent {
  chartOptions = {
    series: [
      {
        data: [
          {
            x: "Code",
            y: [
              new Date("2019-03-02").getTime(),
              new Date("2019-03-04").getTime()
            ]
          },
          {
            x: "Test",
            y: [
              new Date("2019-03-04").getTime(),
              new Date("2019-03-08").getTime()
            ]
          },
          {
            x: "Validation",
            y: [
              new Date("2019-03-08").getTime(),
              new Date("2019-03-12").getTime()
            ]
          },
          {
            x: "Deployment",
            y: [
              new Date("2019-03-12").getTime(),
              new Date("2019-03-18").getTime()
            ]
          }
        ]
      }
    ],
    chart: {
      height: 350,
      type: "rangeBar",
      toolbar: {
        show: false
      }
    },
    colors:["var(--primary)"],
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    xaxis: {
      type: "datetime"
    }
  };
}
