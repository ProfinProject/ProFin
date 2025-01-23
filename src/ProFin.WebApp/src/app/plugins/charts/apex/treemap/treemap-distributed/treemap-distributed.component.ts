import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-treemap-distributed',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './treemap-distributed.component.html',
  styleUrl: './treemap-distributed.component.css'
})
export class TreemapDistributedComponent {
  chartOptions = {
    series: [
      {
        data: [
          {
            x: "New Delhi",
            y: 218
          },
          {
            x: "Kolkata",
            y: 149
          },
          {
            x: "Mumbai",
            y: 184
          },
          {
            x: "Ahmedabad",
            y: 55
          },
          {
            x: "Bangaluru",
            y: 84
          },
          {
            x: "Pune",
            y: 31
          },
          {
            x: "Chennai",
            y: 70
          },
          {
            x: "Jaipur",
            y: 30
          },
          {
            x: "Surat",
            y: 44
          },
          {
            x: "Hyderabad",
            y: 68
          },
          {
            x: "Lucknow",
            y: 28
          },
          {
            x: "Indore",
            y: 19
          },
          {
            x: "Kanpur",
            y: 29
          }
        ]
      }
    ],
    legend: {
      show: false
    },
    chart: {
      height: 350,
      type: "treemap",
      toolbar: {
        show: false
      }
    },
    colors: [
      "var(--primary)",
      "#F7B844",
      "#ADD8C7",
      "#EC3C65",
      "#CDD7B6",
      "#C1F666",
      "#D43F97",
      "#1E5D8C",
      "#421243",
      "#7F94B0",
      "#EF6537",
      "#C0ADDB"
    ],
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false
      }
    }
  };
}
