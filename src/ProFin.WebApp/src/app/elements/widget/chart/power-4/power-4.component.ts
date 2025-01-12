import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-power-4',
  standalone: true,
  imports: [],
  templateUrl: './power-4.component.html',
  styleUrl: './power-4.component.css'
})
export class Power4Component {
  chartjs_bar = {
    type: 'bar',
    data: {
      defaultFontFamily: 'Poppins',
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					datasets: [
						{
							label: "My First dataset",
							data: [65, 59, 80, 81, 56, 55, 40, 88, 45, 95, 54, 76],
							borderColor: "#ff2c53",
							borderWidth: "0",
							backgroundColor: "#ff2c53", 
							hoverBackgroundColor: "#ff2c53",
              barPercentage: 0.6, 
						}
					]
    },
    options: {
      plugins:{
        legend:false,
        
      },
      responsive: true, 
      maintainAspectRatio: false,  
      scales: {
        y:{
          display: false, 
          max: 100, 
          min: 0, 
          ticks: {
            beginAtZero: true, 
            display: false, 
            stepSize: 10
          }, 
          grid: {
            display: false, 
            drawBorder: false
          }
        },
        x:{
          display: false,
          grid: {
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
    new Chart('chart_widget_7', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
