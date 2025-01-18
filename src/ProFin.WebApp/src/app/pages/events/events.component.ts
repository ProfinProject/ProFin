import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../elements/breadcrumb/breadcrumb.component';
import { GraphAvailableTicketComponent } from '../../elements/short-cods/events/graph-available-ticket/graph-available-ticket.component';
import { GraphRevenueComponent } from '../../elements/short-cods/analytics/graph-revenue/graph-revenue.component';
import { GraphRevenue2Component } from '../../elements/short-cods/analytics/graph-revenue2/graph-revenue2.component';
import { GraphTicketOrderedComponent } from '../../elements/short-cods/analytics/graph-ticket-ordered/graph-ticket-ordered.component';
import { GraphTicketRefundedComponent } from '../../elements/short-cods/analytics/graph-ticket-refunded/graph-ticket-refunded.component';
import { GraphSalesSummaryComponent } from '../../elements/short-cods/analytics/graph-sales-summary/graph-sales-summary.component';
import { RecentSalesComponent } from '../../elements/short-cods/events/recent-sales/recent-sales.component';

interface type {
  order_id: string,
  date: string,
  customer_name: string,
  location: string,
  sold_ticket: string,
  refund: string,
}
@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    GraphAvailableTicketComponent,
    GraphRevenueComponent,
    GraphRevenue2Component,
    GraphTicketOrderedComponent,
    GraphTicketRefundedComponent,
    GraphSalesSummaryComponent,
    RecentSalesComponent
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  breadcrumbList = {
    menu_path: 'Dashboard',
    currentURL: 'Events',
  }
  recentSales: type[] = [
    {
      order_id: "#5552351",
      date: "26 March 2020, 12:42 AM",
      customer_name: "James WItcwicky",
      location: "Medan Indonasia",
      sold_ticket: "4 pcs",
      refund: "NO",
    },
    {
      order_id: "#5552351",
      date: "26 March 2020, 12:42 AM",
      customer_name: "James WItcwicky",
      location: "Medan Indonasia",
      sold_ticket: "4 pcs",
      refund: "NO",
    },
    {
      order_id: "#5552351",
      date: "26 March 2020, 12:42 AM",
      customer_name: "James WItcwicky",
      location: "Medan Indonasia",
      sold_ticket: "4 pcs",
      refund: "NO",
    },
    {
      order_id: "#5552351",
      date: "26 March 2020, 12:42 AM",
      customer_name: "James WItcwicky",
      location: "Medan Indonasia",
      sold_ticket: "4 pcs",
      refund: "NO",
    },
    {
      order_id: "#5552351",
      date: "26 March 2020, 12:42 AM",
      customer_name: "James WItcwicky",
      location: "Medan Indonasia",
      sold_ticket: "4 pcs",
      refund: "NO",
    },
    {
      order_id: "#5552351",
      date: "26 March 2020, 12:42 AM",
      customer_name: "James WItcwicky",
      location: "Medan Indonasia",
      sold_ticket: "4 pcs",
      refund: "NO",
    },
  ];
}
