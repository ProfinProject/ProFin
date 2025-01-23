import { Component } from '@angular/core';
import { GraphLatestSalesComponent } from '../../elements/short-cods/dashboard/graph-latest-sales/graph-latest-sales.component';
import { GraphSalesRevenueComponent } from '../../elements/short-cods/dashboard/graph-sales-revenue/graph-sales-revenue.component';
import { LatestSalesComponent } from '../../elements/short-cods/dashboard/latest-sales/latest-sales.component';
import { GraphTicketSoldComponent } from '../../elements/short-cods/dashboard/graph-ticket-sold/graph-ticket-sold.component';
import { Router } from '@angular/router';

interface dataType {
  image: string,
  user: string,
  title: string,
  time: string
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    GraphSalesRevenueComponent,
    GraphLatestSalesComponent,
    LatestSalesComponent,
    GraphTicketSoldComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router){

  }
  ngOnDestroy() {
    if (this.router.url != '/admin') {
      document.getElementById("eventSidebar")?.setAttribute("class", "event-sidebar dz-scroll");
    }
  }

  latestSalesMoreData: dataType[] = [
    {
      image: "assets/images/avatar/1.jpg",
      user: "Olivia Johnson",
      title: "Height Performance conert 2024",
      time: "2m ago",
    },
    {
      image: "assets/images/avatar/2.jpg",
      user: "Griezerman",
      title: "Fireworks Show New Year 2024",
      time: "5m ago",
    },
    {
      image: "assets/images/avatar/3.jpg",
      user: "Uli Trumb",
      title: "Height Performance conert 2024",
      time: "8m ago",
    },
    {
      image: "assets/images/avatar/4.jpg",
      user: "Oconner",
      title: "Fireworks Show New Year 2024",
      time: "12m ago",
    },
    {
      image: "assets/images/avatar/2.jpg",
      user: "Griezerman",
      title: "Fireworks Show New Year 2024",
      time: "5m ago",
    },
    {
      image: "assets/images/avatar/3.jpg",
      user: "Uli Trumb",
      title: "Height Performance conert 2024",
      time: "8m ago",
    },
    {
      image: "assets/images/avatar/4.jpg",
      user: "Oconner",
      title: "Fireworks Show New Year 2024",
      time: "12m ago",
    },
  ];


}
