import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-progressive-line',
  standalone: true,
  imports: [],
  templateUrl: './progressive-line.component.html',
  styleUrl: './progressive-line.component.css'
})
export class ProgressiveLineComponent {
  data: any = [];
  data2: any = [];
  prev: any = 100;
  prev2: any = 80;
  constructor() {
    for (let i = 0; i < 1000; i++) {
      this.prev += 5 - Math.random() * 10;
      this.data.push({ x: i, y: this.prev });
      this.prev2 += 5 - Math.random() * 10;
      this.data2.push({ x: i, y: this.prev2 });
    }
  }

  totalDuration = 10000;
  delayBetweenPoints = this.totalDuration / 2;
  previousY = (ctx: any) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  chartjs_bar = {
    type: 'line',
    data: {
      datasets: [{
        borderColor: '#222fb9',
        borderWidth: 1,
        radius: 0,
        data: this.data,
      },
      {
        borderColor: '#febb3b',
        borderWidth: 1,
        radius: 0,
        data: this.data2,
      }]
    },

    options: {
      animation: {
        x: {
          type: 'number',
          easing: 'linear',
          duration: this.delayBetweenPoints,
          from: NaN, // the point is initially skipped
          delay(ctx: any) {
            if (ctx.type !== 'data' || ctx.xStarted) {
              return 0;
            }
            ctx.xStarted = true;
            return ctx.index * 5;
          },
        },
        y: {
          type: 'number',
          easing: 'linear',
          duration: this.delayBetweenPoints,
          from: this.previousY,
          delay(ctx: any) {
            if (ctx.type !== 'data' || ctx.yStarted) {
              return 0;
            }
            ctx.yStarted = true;
            return ctx.index * 5;
          }
        }
      },
      interaction: {
        intersect: false
      },
      plugins: {
        legend: false
      },
      scales: {
        y: {
          grid: {
            color: '#8a8eb95c',
          },
        },
        x:{
          type: 'linear',
          grid: {
            color: '#8a8eb95c',
          },
        }
      },
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('progressiveineChart', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
