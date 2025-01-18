import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../elements/breadcrumb/breadcrumb.component';
import { TrendingItemsComponent } from '../../elements/short-cods/analytics/trending-items/trending-items.component';
import { GraphSalesComparisonComponent } from '../../elements/short-cods/analytics/graph-sales-comparison/graph-sales-comparison.component';
import { GraphRevenueComponent } from '../../elements/short-cods/analytics/graph-revenue/graph-revenue.component';
import { GraphTicketOrderedComponent } from '../../elements/short-cods/analytics/graph-ticket-ordered/graph-ticket-ordered.component';
import { GraphRevenue2Component } from '../../elements/short-cods/analytics/graph-revenue2/graph-revenue2.component';
import { GraphPieComponent } from '../../elements/short-cods/analytics/graph-pie/graph-pie.component';
import { DropdownComponent } from '../../elements/dropdown/dropdown.component';
import { GraphSalesSummaryComponent } from '../../elements/short-cods/analytics/graph-sales-summary/graph-sales-summary.component';
import { GraphTicketRefundedComponent } from '../../elements/short-cods/analytics/graph-ticket-refunded/graph-ticket-refunded.component';

interface type {
  sr_no: string,
  title: string,
  sales: string,
  progress_image: string
}
@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    TrendingItemsComponent,
    GraphSalesComparisonComponent,
    GraphRevenueComponent,
    GraphTicketOrderedComponent,
    GraphRevenue2Component,
    GraphPieComponent,
    DropdownComponent,
    GraphSalesSummaryComponent,
    GraphTicketRefundedComponent
  ],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent {

  dropdownYear = {
    select: 'Daily',
    formControl: true,
    value: ['Daily', 'Newest', 'Old']
  }

  breadcrumbList = {
    menu_path: 'Dashboard',
    currentURL: 'Analytics',
  }

  trendingItems: type[] = [
    {
      sr_no: "#1",
      title: "Envato International Meetup 2020",
      sales: "454",
      progress_image: "assets/images/svg/up.svg",
    },
    {
      sr_no: "#2",
      title: "Jakarta Indie Music Festival 2020",
      sales: "485",
      progress_image: "assets/images/svg/down.svg",
    },
    {
      sr_no: "#3",
      title: "Live Choir in Sydney 2020",
      sales: "250",
      progress_image: "assets/images/svg/up.svg",
    },
    {
      sr_no: "#4",
      title: "Artist Performing Festival In Aus..",
      sales: "350",
      progress_image: "assets/images/svg/down.svg",
    },
    {
      sr_no: "#5",
      title: "[LIVE] Football Charity Event 2020",
      sales: "752",
      progress_image: "assets/images/svg/down.svg",
    },
  ];
}
