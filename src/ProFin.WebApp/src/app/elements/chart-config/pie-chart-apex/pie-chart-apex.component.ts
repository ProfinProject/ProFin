import { Component, Input } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ApexStroke,
  ApexLegend,
  ApexResponsive,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexTheme,
  ApexYAxis,
  NgApexchartsModule,
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  fill: ApexFill;
  yaxis: ApexYAxis;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive | ApexResponsive[];
};

@Component({
  selector: 'app-pie-chart-apex',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './pie-chart-apex.component.html',
  styleUrl: './pie-chart-apex.component.css'
})
export class PieChartApexComponent {

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
      labels: this.all_data.labels,
      legend: this.all_data.legend,
      dataLabels: this.all_data.dataLabels,

      yaxis: this.all_data.yaxis,
      title: this.all_data.title,
      theme: this.all_data.theme,
      fill: this.all_data.fill,
      stroke: this.all_data.stroke,
      responsive: this.all_data.responsive
    };
    this.options = chartOptions;
  }
}
