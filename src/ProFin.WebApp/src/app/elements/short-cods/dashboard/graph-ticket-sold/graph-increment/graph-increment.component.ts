import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-graph-increment',
  standalone: true,
  imports: [
    BarChartApexComponent
  ],
  templateUrl: './graph-increment.component.html',
  styleUrl: './graph-increment.component.css'
})
export class GraphIncrementComponent {
  chartOptions = {
    series: [
      {
        name: "Net Profit",
        data: [0,2,1,4],
      }
    ],
    chart: {
      type: "area",
      height: 50,
      width: 80,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    colors:['var(--primary)'],
    dataLabels: {
      enabled: false,
    },
    markers: {
      shape: "circle",
    },
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      width: 4,
      curve:'straight',
      colors:['var(--primary)'],
    },
    grid: {
      show:false,
      borderColor: '#eee',
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
        
      }
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0
        }
      },
      hover: {
        filter: {
          type: 'none',
          value: 0
        }
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0
        }
      }
    },
    xaxis: {
      categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
        style: {
          fontSize: '12px',
        }
      },
      crosshairs: {
        show: false,
        position: 'front',
        stroke: {
          width: 1,
          dashArray: 3
        }
      },
      tooltip: {
        enabled: false,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: '12px',
        }
      }
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
      colors:['#222fb9']
    },
    tooltip: {
        enabled: false,
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function(val:any) {
          return "$" + val + " thousands"
        }
      }
    }
    
  };
}
