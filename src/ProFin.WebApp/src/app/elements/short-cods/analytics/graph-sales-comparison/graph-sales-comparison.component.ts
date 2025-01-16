import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph-sales-comparison',
  standalone: true,
  imports: [],
  templateUrl: './graph-sales-comparison.component.html',
  styleUrl: './graph-sales-comparison.component.css'
})
export class GraphSalesComparisonComponent {
  labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  chartjs_bar = {
    type: 'bar',
    data: {
      defaultFontFamily: 'Poppins',
      labels: this.labels,
      datasets:  [{
				label: 'Expense',
				backgroundColor: '#ffe600',
				hoverBackgroundColor: '#f3db00', 
				barThickness:"18",
				fill:true,
				
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
					'16'
				]
			}, {
				label: 'Earning',
				backgroundColor: ['rgba(0, 0, 0, .04)'],
				hoverBackgroundColor: ['rgba(0, 0, 0, .08)'], 
				barThickness:"18",
				fill:true,
				data: [
					'12',
					'18',
					'14',
					'7',
					'5',
					'10',
					'20', 
					'8', 
					'12', 
					'18', 
					'14', 
					'16'
				]
			}]
    },
    options: {
      plugins:{
        legend:false,
      },
      barPercentage: 0.25, 
      
      title: {
        display: false
      },
      tooltips: {
        mode: 'index',
        intersect: false
      },
      
      responsive: true,
      maintainAspectRatio: false, 
      scales: {
        x: {
          display: true, 
          stacked: true,
          //barThickness:15,
          ticks: {
            display: true,
            color: '#ffffff'
          }, 
          grid: {
            display: false, 
            drawBorder: false,
          },
          border: {
            display: false, 
          },
        },
        y: {
          display: true, 
          stacked: true, 
          grid: {
            display: false, 
            drawBorder: false,
          }, 
          ticks: {
            display: false,
          },
          border: {
            display: false, 
          },
        }
      }
     
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('ticketSold', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
