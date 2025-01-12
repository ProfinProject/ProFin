import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-lorem-ipsums-2',
  standalone: true,
  imports: [],
  templateUrl: './lorem-ipsums-2.component.html',
  styleUrl: './lorem-ipsums-2.component.css'
})
export class LoremIpsums2Component {
  chartjs_bar = {
    type: 'bar',
    data: {
      defaultFontFamily: 'Poppins',
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
				label: 'Expense',
				backgroundColor: '#ff2c53',
				hoverBackgroundColor: '#ff5777',  
				barPercentage: 0.2,
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
				backgroundColor: '#F1F3F7',
				hoverBackgroundColor: '#F1F3F7', 
				barPercentage: 0.2,
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
          display: false, 
          stacked: true,
          barPercentage: .2, 
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
          ticks: {
            display: false
          }
        }
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('chart_widget_33', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
