import { Component } from '@angular/core';
import { PieChartApexComponent } from '../../../chart-config/pie-chart-apex/pie-chart-apex.component';
import { DoughnutChartJsComponent } from '../../../chart-config/doughnut-chart-js/doughnut-chart-js.component';

@Component({
  selector: 'app-graph-available-ticket',
  standalone: true,
  imports: [
    PieChartApexComponent,
    DoughnutChartJsComponent
  ],
  templateUrl: './graph-available-ticket.component.html',
  styleUrl: './graph-available-ticket.component.css'
})
export class GraphAvailableTicketComponent {
  chartOptions = {
    series: [65, 35],
    chart: {
      height: 80,
      width: 90,
      // height: 180,
      type: "donut",
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 0,
    },
    fill: {
      type: "solid"
    },
    legend: {
      position: "bottom",
      show: false
    },
    tooltip: {
      enabled: false,
    },
    labels: ["Heart Beat", "Immunities"],
    colors: ['#222fb9', '#e8eaf8'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 150
          },
          legend: {
            position: "bottom",
            show: false
          }
        }
      }
    ]
  };
}
