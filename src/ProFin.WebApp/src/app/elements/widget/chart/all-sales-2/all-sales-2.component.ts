import { Component } from '@angular/core';
import { Chart, registerables} from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-all-sales-2',
  standalone: true,
  imports: [],
  templateUrl: './all-sales-2.component.html',
  styleUrl: './all-sales-2.component.css'
})
export class AllSales2Component {
  chartjs_bar = {
    type: 'line',
    data: {
      defaultFontFamily: 'Poppins',
				labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
				datasets: [
					{
						label: "My First dataset",
						data: [25, 60, 30, 71, 26, 85, 50],
						borderColor: '#2780d4',
						borderWidth: "2",
						backgroundColor: 'transparent',  
						pointBackgroundColor: '#2780d4', 
						pointRadius: 0,
						tension:0.5,
					}
				]
    },
    options: {
      plugins:{
        legend: false, 
        
      },
      responsive: true, 
      maintainAspectRatio: false, 
      scales: {
        y: {
          display: false,
          max: 100, 
          min: 0,
          stepSize: 20,
          ticks: {
            beginAtZero: true, 
            padding: 0, 
            display: false, 
          }, 
          gridLines: {
            drawBorder: false, 
            display: false
          }
        },
        x: {
          display: false, 
          ticks: {
            padding: 0, 
            display: false
          }, 
          gridLines: {
            display: false, 
            drawBorder: false
          }
        }
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('chart_widget_15', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
