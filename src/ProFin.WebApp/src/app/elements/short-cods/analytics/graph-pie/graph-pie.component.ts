import { Component } from '@angular/core';
import { DropdownComponent } from '../../../dropdown/dropdown.component';
import { PieChartApexComponent } from '../../../chart-config/pie-chart-apex/pie-chart-apex.component';

@Component({
  selector: 'app-graph-pie',
  standalone: true,
  imports: [
    DropdownComponent,
    PieChartApexComponent
  ],
  templateUrl: './graph-pie.component.html',
  styleUrl: './graph-pie.component.css'
})
export class GraphPieComponent {
  dropdownYear = {
    select: 'Daily',
    formControl: true,
    value: ['Daily', 'Newest', 'Old']
  }

  optionsCircle = {
    chart: {
      type: 'radialBar',
      height: 350,
      offsetY: 0,
      offsetX: 0,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        size: undefined,
        inverseOrder: false,
        hollow: {
          margin: 0,
          size: '35%',
          background: 'transparent',
        },

        track: {
          show: true,
          background: '#e1e5ff',
          strokeWidth: '12%',
          opacity: 1,
          margin: 15, // margin is in pixels
        },
      },
    },

    fill: {
      opacity: 1
    },
    colors: ['var(--primary)', 'var(--primary)', 'var(--primary)'],
    series: [71, 63, 90],
    labels: ['Ticket A', 'Ticket B', 'Ticket C'],

    legend: {
      fontSize: '14px',
      show: true,
      position: 'bottom'

    },
    responsive: [{
      breakpoint: 1480,
      options: {
        chart: {
          height: 300,
        },

      }
    },
    {
      breakpoint: 480,
      options: {
        chart: {
          offsetY: 0,
          offsetX: 0,
        },
        legend: {
          position: 'bottom',
          offsetX: 0,
          offsetY: 0
        }
      }
    }],
  }

}
