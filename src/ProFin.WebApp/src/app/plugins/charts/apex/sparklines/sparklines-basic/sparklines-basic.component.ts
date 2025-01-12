import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexYAxis,
  ApexStroke,
  NgApexchartsModule
} from "ng-apexcharts";
const sparkLineData = [
  47,
  45,
  54,
  38,
  56,
  24,
  65,
  31,
  37,
  39,
  62,
  51,
  35,
  41,
  35,
  27,
  93,
  53,
  61,
  27,
  54,
  43,
  19,
  46
];
@Component({
  selector: 'app-sparklines-basic',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './sparklines-basic.component.html',
  styleUrl: './sparklines-basic.component.css'
})
export class SparklinesBasicComponent {

  colors: any = ["var(--primary)"]


  //  1 -----
  series1: ApexAxisChartSeries = [
    {
      name: "chart-big-sparkline",
      data: this.randomizeArray(sparkLineData)
    }
  ]
  colors1: any = ["#DCE6EC"]
  title1: ApexTitleSubtitle = {
    text: "$424,652",
    offsetX: 0,
    style: {
      fontSize: "24px"
    }
  }
  subtitle1: ApexTitleSubtitle = {
    text: "Sales",
    offsetX: 0,
    style: {
      fontSize: "14px"
    }
  }

  // 2 -----  
  series2: ApexAxisChartSeries = [
    {
      name: "chart-big-sparkline",
      data: this.randomizeArray(sparkLineData)
    }
  ]
  colors2: any = ["#DCE6EC"]
  title2: ApexTitleSubtitle = {
    text: "$235,312",
    offsetX: 0,
    style: {
      fontSize: "24px"
    }
  }
  subtitle2: ApexTitleSubtitle = {
    text: "Expenses",
    offsetX: 0,
    style: {
      fontSize: "14px"
    }
  }

  // 3 ---
  series3: ApexAxisChartSeries = [
    {
      name: "chart-big-sparkline",
      data: this.randomizeArray(sparkLineData)
    }
  ]

  title3: ApexTitleSubtitle = {
    text: "$135,965",
    offsetX: 0,
    style: {
      fontSize: "24px"
    }
  }
  subtitle3: ApexTitleSubtitle = {
    text: "Profits",
    offsetX: 0,
    style: {
      fontSize: "14px"
    }
  }

  // 4  ---
  series4: ApexAxisChartSeries = [
    {
      name: "chart-line-sparkline",
      data: this.randomizeArray(sparkLineData.slice(0, 10))
    }
  ]

  // 5  ---
  series5: ApexAxisChartSeries = [
    {
      name: "chart-bar-sparkline",
      data: this.randomizeArray(sparkLineData.slice(0, 10))
    }
  ]

  // 6  ---
  series6: ApexAxisChartSeries = [
    {
      name: "chart-line-sparkline",
      data: this.randomizeArray(sparkLineData.slice(0, 10))
    }
  ]

  // 7  ---
  series7: ApexAxisChartSeries = [
    {
      name: "chart-bar-sparkline",
      data: this.randomizeArray(sparkLineData.slice(0, 10))
    }
  ]

  // 8  ---
  series8: ApexAxisChartSeries = [
    {
      name: "chart-line-sparkline",
      data: this.randomizeArray(sparkLineData.slice(0, 10))
    }
  ]

  // 9  ---
  series9: ApexAxisChartSeries = [
    {
      name: "chart-bar-sparkline",
      data: this.randomizeArray(sparkLineData.slice(0, 10))
    }
  ]

  // 10  ---
  series10: ApexAxisChartSeries = [
    {
      name: "chart-line-sparkline",
      data: this.randomizeArray(sparkLineData.slice(0, 10))
    }
  ]

  // 11  ---
  series11: ApexAxisChartSeries = [
    {
      name: "chart-bar-sparkline",
      data: this.randomizeArray(sparkLineData.slice(0, 10))
    }
  ]

  // multiple use  --- 1 -
  chart_1: ApexChart = {
    type: "area",
    height: 160,
    sparkline: {
      enabled: true
    }
  }
  stroke_1: ApexStroke = {
    curve: "straight"
  }
  fill_1: ApexFill = {
    opacity: 0.3
  }
  yaxis_1: ApexYAxis = {
    min: 0
  }

  // multiple use  --- 2 -
  chart_2: ApexChart = {
    type: "line",
    width: 100,
    height: 35,
    sparkline: {
      enabled: true
    }
  }
  tooltip_2: ApexTooltip = {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        }
      }
    },
    marker: {
      show: false
    }
  }

  // multiple use  --- 3 -
  chart_3: ApexChart = {
    type: "bar",
    width: 100,
    height: 35,
    sparkline: {
      enabled: true
    }
  }
  plotOptions_3: ApexPlotOptions = {
    bar: {
      columnWidth: "80%"
    }
  }
  tooltip_3: ApexTooltip = {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName: any) {
          return "";
        }
      }
    },
    marker: {
      show: false
    }
  }

  public randomizeArray(arg: any): number[] {
    var array = arg.slice();
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

}
