import { Component } from '@angular/core';
import { DropdownComponent } from '../../../dropdown/dropdown.component';
import { PieChartApexComponent } from '../../../chart-config/pie-chart-apex/pie-chart-apex.component';

@Component({
  selector: 'app-graph-sales-summary',
  standalone: true,
  imports: [
    DropdownComponent,
    PieChartApexComponent
  ],
  templateUrl: './graph-sales-summary.component.html',
  styleUrl: './graph-sales-summary.component.css'
})
export class GraphSalesSummaryComponent {
  dropdownYear = {
    select: 'Daily',
    formControl: true,
    value: ['Daily', 'Newest', 'Old']
  }

  chartOptions = {
    series: [42, 47, 52, 58],
    chart: {
      type: 'polarArea',
      sparkline: {
        enabled: true,
      },
    },
    labels: ['VIP', 'Reguler', 'Exclusive', 'Economic'],
    fill: {
      opacity: 1,
      colors: ['#2130b8', '#21b830', '#ff7a00', '#ffe600']
    },
    stroke: {
      width: 0,
      colors: undefined
    },
    yaxis: {
      show: false
    },
    legend: {
      position: 'bottom'
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0
        }
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 0.6,
      }
    },

  };
}
