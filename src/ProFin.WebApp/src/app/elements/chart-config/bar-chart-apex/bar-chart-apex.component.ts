
import { Component, Input } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexYAxis,
  ApexXAxis,
  ApexFill,
  ApexStroke,
  ApexLegend,
  ApexGrid,
  ApexTooltip,
  ApexPlotOptions,
  ApexResponsive,
  ApexStates,
  ApexMarkers,
  ApexTheme,
  ApexTitleSubtitle,
  NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexAxisChartSeries[];
  chart: ApexChart;
  labels?: string[];
  colors?: string[];
  legend?: ApexLegend;
  dataLabels?: ApexDataLabels;
  states?: ApexStates;
  fill?: ApexFill;
  grid?: ApexGrid;
  theme?: ApexTheme;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis;
  stroke?: ApexStroke;
  markers?: ApexMarkers;
  tooltip?: ApexTooltip;
  title?: ApexTitleSubtitle;
  plotOptions?: ApexPlotOptions;
  responsive?: ApexResponsive | ApexResponsive[];
};

@Component({
  selector: 'app-bar-chart-apex',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './bar-chart-apex.component.html',
  styleUrl: './bar-chart-apex.component.css'
})
export class BarChartApexComponent {

  @Input() chart_item: any = '';
  options: any = '';
  all_data: any = '';

  ngOnInit() {
    this.all_data = this.chart_item;
    const chartOptions: Partial<ChartOptions> = {

      series: this.all_data.series,
      chart: this.all_data.chart,

      plotOptions: this.all_data.plotOptions,

      colors: this.all_data.colors,
      xaxis: this.all_data.xaxis,
      yaxis: this.all_data.yaxis,
      labels: this.all_data.labels,
      grid: this.all_data.grid,
      legend: this.all_data.legend,
      dataLabels: this.all_data.dataLabels,

      fill: this.all_data.fill,
      stroke: this.all_data.stroke,
      tooltip: this.all_data.tooltip,
      responsive: this.all_data.responsive,

      states: this.all_data.states,
      markers: this.all_data.markers,
      theme: this.all_data.theme,
      title: this.all_data.title,
    };
    this.options = chartOptions;
  }
}
