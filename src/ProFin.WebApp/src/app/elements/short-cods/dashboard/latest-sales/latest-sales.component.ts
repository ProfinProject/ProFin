import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-latest-sales',
  standalone: true,
  imports: [],
  templateUrl: './latest-sales.component.html',
  styleUrl: './latest-sales.component.css'
})
export class LatestSalesComponent {
  @Input() tableData: any = '';
  latestSales: any = [];
  ngOnInit() {
    for (let i = 0; i < this.tableData.length; i++) {
      if (i < 4) {
        this.latestSales.push(this.tableData[i]);
      }
    }
  }


  lodingData: boolean = false;
  noMoreData: boolean = false;
  showMore() {
    let newLength = this.latestSales.length + 2;
    if (newLength > this.tableData.length) {
      newLength = this.tableData.length
    }
    this.lodingData = true;
    setTimeout(() => {
      this.latestSales = this.tableData.slice(0, newLength);
      this.lodingData = false;
      if (this.latestSales.length == this.tableData.length) {
        this.noMoreData = true;
      }
    }, 2000)
  }
}
