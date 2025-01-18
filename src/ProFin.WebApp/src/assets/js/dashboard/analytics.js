(function($) {
    /* "use strict" */


 var dzChartlist = function(){
	
	var screenWidth = $(window).width();
		
	var polarAreaCharts = function(){
		var options = {
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

        var chart = new ApexCharts(document.querySelector("#polarAreaCharts"), options);
        chart.render();
	}
	
	
	var chartDonut = function(){
		$("span.donut").peity("donut", {
			width: "80",
			height: "80",
			radius: 8,
		});
		
	}

	
	var updatingChart = function(){
		 var t = $(".updating-chart").peity("line", {
			fill: ['rgba(255, 38, 38, .04)'],
			stroke: 'rgb(255, 38, 38)', 
			strokeWidth: 2,
			width: "100%",
			height: 30
		});
		setInterval(function() {
			var e = Math.round(10 * Math.random()),
				i = t.text().split(",");
			i.shift(), i.push(e), t.text(i.join(",")).change()
		}, 1e3)
	}
	var chartBar = function(){
		if(jQuery('#chart_widget_2').length > 0 ){
	
			const chart_widget_2 = document.getElementById("chart_widget_2").getContext('2d');
			//generate gradient
			const chart_widget_2gradientStroke = chart_widget_2.createLinearGradient(250, 0, 0, 0);
			chart_widget_2gradientStroke.addColorStop(1, "#ff7a00");
			chart_widget_2gradientStroke.addColorStop(0, "#2130b8");

			// chart_widget_2.attr('height', '100');

			// Get the reference to the existing chart with ID 'barChart_1'
			var existingChart = Chart.getChart(chart_widget_2.canvas.id);

			// Check if the chart exists
			if (existingChart) {
				// Destroy the existing chart
				existingChart.destroy();
			}

			new Chart(chart_widget_2, {
				type: 'bar',
				data: {
					defaultFontFamily: 'Poppins',
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					datasets: [
						{
							label: "My First dataset",
							data: [15, 40, 55, 40, 25, 35, 40, 50, 85, 95, 54, 35],
							borderColor: chart_widget_2gradientStroke,
							borderWidth: "0",
							backgroundColor: chart_widget_2gradientStroke, 
							hoverBackgroundColor: chart_widget_2gradientStroke
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
							ticks: {
								beginAtZero: true, 
								display: false, 
								max: 100, 
								min: 0, 
								stepSize: 10
							}, 
							grid: {
								display: false, 
								drawBorder: false
							}
						},
						x: {
							display: false, 
							barPercentage: 0.4, 
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
			});

		}
		
		
	}
	
	var revenueChart = function(){
		if(jQuery('#revenueChart').length > 0 ){
			const chart_widget_9 = document.getElementById("revenueChart").getContext('2d');

			new Chart(chart_widget_9, {
				type: "line",
				data: {
					labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April"],
					datasets: [{
						label: "Sales Stats",
						backgroundColor: ['rgba(33, 48, 184, .08)'],
						borderColor: '#2130b8',
						pointBackgroundColor: '#2130b8',
						pointBorderColor: '#2130b8',
						borderWidth:2,
						pointHoverBackgroundColor: '#2130b8',
						pointHoverBorderColor: '#2130b8',
						data: [8, 7, 6, 3, 2, 4, 6, 8, 12, 6, 12, 13, 10, 18, 14, 24, 16, 12, 19, 21, 16, 14, 24, 21, 13, 15, 27, 29, 21, 11, 14, 19, 21, 17],
						fill:true,
					}]
				},
				options: {
					title: {
						display: !1
					},
					plugins:{
						legend:false,
					},
					tooltips: {
						intersect: !1,
						mode: "nearest",
						xPadding: 10,
						yPadding: 10,
						caretPadding: 10
					},
					legend: {
						display: !1
					},
					responsive: !0,
					maintainAspectRatio: !1,
					hover: {
						mode: "index"
					},
					scales: {
						x: {
							display: !1,
							gridLines: !1,
							scaleLabel: {
								display: !0,
								labelString: "Month"
							}
						},
						y: {
							display: !1,
							gridLines: !1,
							scaleLabel: {
								display: !0,
								labelString: "Value"
							},
							ticks: {
								beginAtZero: !0
							}
						}
					},
					elements: {
						line: {
							tension: .15
						},
						point: {
							radius: 0,
							borderWidth: 0
						}
					},
					layout: {
						padding: {
							left: 0,
							right: 0,
							top: 5,
							bottom: 0
						}
					}
				}
			});

		}
	}
	
	var areaChart = function(){
		if(jQuery('#areaChart_2').length > 0 ){
			const areaChart_2 = document.getElementById("areaChart_2").getContext('2d');
			//generate gradient
			const areaChart_2gradientStroke = areaChart_2.createLinearGradient(0, 1, 0, 500);
			areaChart_2gradientStroke.addColorStop(0, "rgba(247, 43, 80, 0.0)");
			areaChart_2gradientStroke.addColorStop(1, "rgba(247, 43, 80, 0)");
			
			areaChart_2.height = 100;
			// Get the reference to the existing chart with ID 'barChart_1'
			var existingChart = Chart.getChart(areaChart_2.canvas.id);

			// Check if the chart exists
			if (existingChart) {
				// Destroy the existing chart
				existingChart.destroy();
			}

			var config = {
				type: 'line',
				data: {
					defaultFontFamily: 'Poppins',
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
					datasets: [
						{
							label: "My First dataset",
							data: [25, 20, 50, 41, 55, 45, 70],
							borderColor: "#2130b8",
							borderWidth: "4",
							backgroundColor: areaChart_2gradientStroke,
							tension:0.5,
						}
					]
				},
				options: {
					plugins:{
						legend:false,
					},
					legend: false, 
					scales: {
						y:{
							max: 100, 
							min: 0, 
							ticks: {
								beginAtZero: true, 
								
								stepSize: 20, 
								padding: 0,
								grid:{
									drawBorder: false,
								}
							},
							
						},
						x:{ 
							
							ticks: {
								
								padding: 0,
							},
							grid: {
								display: false, 
								drawBorder: false
							}
						}
					}
				}
			};
			var areaChart = new Chart(areaChart_2, config);

			var element = document.querySelector('body');
			var observer = new MutationObserver(function(mutations) {
				mutations.forEach(function(mutation) {
					if(mutation.attributeName === "data-theme-version"){
						if($('body').attr('data-theme-version') === "dark"){
							config.options.scales.y.grid.color = '#3d3d4e'
							config.options.scales.x.grid.color = '#3d3d4e'
						}else{
							config.options.scales.y.grid.color = '#eee'
							config.options.scales.x.grid.color = '#eee'
						}
						areaChart.update();
					}
				});
			});
			observer.observe(element, {
				attributes: true
			});
		}    
	}
	var chartCircle = function(){
		
		
		var optionsCircle = {
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
		colors:['var(--primary)', 'var(--primary)', 'var(--primary)'],
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
						height:300,
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
						offsetX:0,
						offsetY: 0
					}
				}
			}],	
		}
		

		var chartCircle1 = new ApexCharts(document.querySelector('#chartCircle'), optionsCircle);
		chartCircle1.render();
	}
	var ticketSoldChart = function(){
			//#ticketSold
		if(jQuery('#ticketSold').length > 0 ){
		const ticketSold = document.getElementById("ticketSold").getContext('2d');
		
		// ticketSold.height = 100;

		let barChartData = {
			defaultFontFamily: 'Poppins',
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			datasets: [{
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

		};

		new Chart(ticketSold, {
			type: 'bar',
			data: barChartData,
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
		});
		}
	}
	
	
		return {
			init:function(){
			},
			
			
			
			load:function(){
				polarAreaCharts();
				chartBar();
				updatingChart();
				revenueChart();
				chartDonut();
				areaChart();
				chartCircle();
				ticketSoldChart();
			},
			
			resize:function(){
			}
		}
	
	}();

	jQuery(document).ready(function(){
	});
		
	jQuery(window).on('load',function(){
		dzChartlist.load();
		
	});

	jQuery(window).on('resize',function(){
		//dzChartlist.load();
		
	});     

})(jQuery);