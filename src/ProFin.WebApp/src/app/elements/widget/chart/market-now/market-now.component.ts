import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-market-now',
  standalone: true,
  imports: [],
  templateUrl: './market-now.component.html',
  styleUrl: './market-now.component.css'
})
export class MarketNowComponent {
  chartjs_bar = {
    type: 'bar',
    data: {
      defaultFontFamily: 'Poppins',
			labels: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'forteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'],
			datasets: [{
				label: 'Expense',
				backgroundColor: '#430b58',
				hoverBackgroundColor: '#6c2586', 
				barPercentage: 1, 
				barThickness: 5, 
				data: [
					'20',
					'14',
					'18',
					'25',
					'27',
					'22',
					'12', 
					'24', 
					'20', 
					'14', 
					'18', 
					'16', 
					'34', 
					'32', 
					'43', 
					'36', 
					'56', 
					'12', 
					'23', 
					'34'
				]
			}, {
				label: 'Earning',
				backgroundColor: '#F1F3F7',
				hoverBackgroundColor: '#F1F3F7', 
				barPercentage: 1, 
				barThickness: 5, 
				data: [
					'32',
					'58',
					'34',
					'37',
					'15',
					'41',
					'24', 
					'38', 
					'52', 
					'38', 
					'24', 
					'19', 
					'54', 
					'34', 
					'23', 
					'34', 
					'35', 
					'22', 
					'43', 
					'33'
				]
			}]
    },
    options: {
      plugins:{
        legend:false,
        
        tooltip: {
          mode: 'index',
          intersect: false
        },
        
      },
      title: {
        display: false
      },
      
      responsive: true,
      maintainAspectRatio: false, 
      scales: {
        x: {
          display: false, 
          stacked: true,
          barPercentage: 1, 
          barThickness: 5, 
          ticks: {
            display: false
          }, 
          gridLines: {
            display: false, 
            drawBorder: false
          }
        },
        y: {
          display: false, 
          stacked: true, 
          gridLines: {
            display: false, 
            drawBorder: false
          }, 
            max: 100, 
            min: 0,
          ticks: {
            display: false, 
          }
        }
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('chart_widget_4', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
