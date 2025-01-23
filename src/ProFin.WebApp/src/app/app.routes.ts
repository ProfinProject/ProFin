import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './elements/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/apps/profile/profile.component';
import { EditProfileComponent } from './pages/apps/edit-profile/edit-profile.component';
import { ComposeComponent } from './pages/apps/email/compose/compose.component';
import { InboxComponent } from './pages/apps/email/inbox/inbox.component';
import { ReadComponent } from './pages/apps/email/read/read.component';
import { CalenderComponent } from './pages/apps/calender/calender.component';
import { ProductGridComponent } from './pages/apps/shop/product-grid/product-grid.component';
import { ProductListComponent } from './pages/apps/shop/product-list/product-list.component';
import { ProductDetailComponent } from './pages/apps/shop/product-detail/product-detail.component';
import { OrderComponent } from './pages/apps/shop/order/order.component';
import { CheckoutComponent } from './pages/apps/shop/checkout/checkout.component';
import { InvoiceComponent } from './pages/apps/shop/invoice/invoice.component';
import { EcomCustomersComponent } from './pages/apps/shop/ecom-customers/ecom-customers.component';
import { FlatIconsComponent } from './pages/icons/flat-icons/flat-icons.component';
import { SvgIconsComponent } from './pages/icons/svg-icons/svg-icons.component';
import { ContentComponent } from './pages/cms/content/content.component';
import { BlogAddComponent } from './pages/cms/blog-add/blog-add.component';
import { BlogCategoryComponent } from './pages/cms/blog-category/blog-category.component';
import { BlogComponent } from './pages/cms/blog/blog.component';
import { ContentAddComponent } from './pages/cms/content-add/content-add.component';
import { EmailAddComponent } from './pages/cms/email-add/email-add.component';
import { EmailTemplateComponent } from './pages/cms/email-template/email-template.component';
import { MenusComponent } from './pages/cms/menus/menus.component';
import { AreaComponent } from './plugins/charts/apex/area/area.component';
import { BarComponent } from './plugins/charts/apex/bar/bar.component';
import { BubbleComponent } from './plugins/charts/apex/bubble/bubble.component';
import { CandlestickComponent } from './plugins/charts/apex/candlestick/candlestick.component';
import { ColumnComponent } from './plugins/charts/apex/column/column.component';
import { HeatmapComponent } from './plugins/charts/apex/heatmap/heatmap.component';
import { LineComponent } from './plugins/charts/apex/line/line.component';
import { MixedComponent } from './plugins/charts/apex/mixed/mixed.component';
import { PieComponent } from './plugins/charts/apex/pie/pie.component';
import { PolarAreaComponent } from './plugins/charts/apex/polar-area/polar-area.component';
import { RadarComponent } from './plugins/charts/apex/radar/radar.component';
import { RadialbarComponent } from './plugins/charts/apex/radialbar/radialbar.component';
import { ScatterComponent } from './plugins/charts/apex/scatter/scatter.component';
import { SparklinesComponent } from './plugins/charts/apex/sparklines/sparklines.component';
import { TimelineComponent } from './plugins/charts/apex/timeline/timeline.component';
import { TreemapComponent } from './plugins/charts/apex/treemap/treemap.component';
import { AnimationChartjsComponent } from './plugins/charts/chart-js/animation-chartjs/animation-chartjs.component';
import { AreaChartjsComponent } from './plugins/charts/chart-js/area-chartjs/area-chartjs.component';
import { BarChartjsComponent } from './plugins/charts/chart-js/bar-chartjs/bar-chartjs.component';
import { BubbleChartjsComponent } from './plugins/charts/chart-js/bubble-chartjs/bubble-chartjs.component';
import { GeneralChartjsComponent } from './plugins/charts/chart-js/general-chartjs/general-chartjs.component';
import { LineChartjsComponent } from './plugins/charts/chart-js/line-chartjs/line-chartjs.component';
import { AccordionComponent } from './components/bootstrap/accordion/accordion.component';
import { CarouselComponent } from './components/bootstrap/carousel/carousel.component';
import { AlertComponent } from './components/bootstrap/alert/alert.component';
import { BadgeComponent } from './components/bootstrap/badge/badge.component';
import { ButtonGroupComponent } from './components/bootstrap/button-group/button-group.component';
import { ButtonComponent } from './components/bootstrap/button/button.component';
import { CardComponent } from './components/bootstrap/card/card.component';
import { DropdownBtComponent } from './components/bootstrap/dropdown-bt/dropdown-bt.component';
import { GridComponent } from './components/bootstrap/grid/grid.component';
import { ListGroupComponent } from './components/bootstrap/list-group/list-group.component';
import { MediaObjectComponent } from './components/bootstrap/media-object/media-object.component';
import { ModalComponent } from './components/bootstrap/modal/modal.component';
import { PaginationBtComponent } from './components/bootstrap/pagination-bt/pagination-bt.component';
import { PopoverComponent } from './components/bootstrap/popover/popover.component';
import { ProgressbarComponent } from './components/bootstrap/progressbar/progressbar.component';
import { TablesComponent } from './components/bootstrap/tables/tables.component';
import { TabsComponent } from './components/bootstrap/tabs/tabs.component';
import { TypographyComponent } from './components/bootstrap/typography/typography.component';
import { DzmtAutocompleteComponent } from './components/material/dzmt-autocomplete/dzmt-autocomplete.component';
import { DzmtBadgeComponent } from './components/material/dzmt-badge/dzmt-badge.component';
import { DzmtBottomSheetComponent } from './components/material/dzmt-bottom-sheet/dzmt-bottom-sheet.component';
import { DzmtButtonTonggleComponent } from './components/material/dzmt-button-tonggle/dzmt-button-tonggle.component';
import { DzmtButtonComponent } from './components/material/dzmt-button/dzmt-button.component';
import { DzmtCardComponent } from './components/material/dzmt-card/dzmt-card.component';
import { DzmtCheckboxComponent } from './components/material/dzmt-checkbox/dzmt-checkbox.component';
import { DzmtChipsComponent } from './components/material/dzmt-chips/dzmt-chips.component';
import { DzmtDatepickerComponent } from './components/material/dzmt-datepicker/dzmt-datepicker.component';
import { DzmtDialogComponent } from './components/material/dzmt-dialog/dzmt-dialog.component';
import { DzmtDividerComponent } from './components/material/dzmt-divider/dzmt-divider.component';
import { DzmtExpansionComponent } from './components/material/dzmt-expansion/dzmt-expansion.component';
import { DzmtFormFieldComponent } from './components/material/dzmt-form-field/dzmt-form-field.component';
import { DzmtGridListComponent } from './components/material/dzmt-grid-list/dzmt-grid-list.component';
import { DzmtIconComponent } from './components/material/dzmt-icon/dzmt-icon.component';
import { DzmtInputComponent } from './components/material/dzmt-input/dzmt-input.component';
import { DzmtListComponent } from './components/material/dzmt-list/dzmt-list.component';
import { DzmtMenuComponent } from './components/material/dzmt-menu/dzmt-menu.component';
import { DzmtPaginatorComponent } from './components/material/dzmt-paginator/dzmt-paginator.component';
import { DzmtProgressBarComponent } from './components/material/dzmt-progress-bar/dzmt-progress-bar.component';
import { DzmtProgressSpinnerComponent } from './components/material/dzmt-progress-spinner/dzmt-progress-spinner.component';
import { DzmtRadioComponent } from './components/material/dzmt-radio/dzmt-radio.component';
import { DzmtRippleComponent } from './components/material/dzmt-ripple/dzmt-ripple.component';
import { DzmtSelectComponent } from './components/material/dzmt-select/dzmt-select.component';
import { DzmtSidenavComponent } from './components/material/dzmt-sidenav/dzmt-sidenav.component';
import { DzmtSlideToggleComponent } from './components/material/dzmt-slide-toggle/dzmt-slide-toggle.component';
import { DzmtSliderComponent } from './components/material/dzmt-slider/dzmt-slider.component';
import { DzmtSnackBarComponent } from './components/material/dzmt-snack-bar/dzmt-snack-bar.component';
import { DzmtSortComponent } from './components/material/dzmt-sort/dzmt-sort.component';
import { DzmtStepperComponent } from './components/material/dzmt-stepper/dzmt-stepper.component';
import { DzmtTableComponent } from './components/material/dzmt-table/dzmt-table.component';
import { DzmtTabsComponent } from './components/material/dzmt-tabs/dzmt-tabs.component';
import { DzmtToolbarComponent } from './components/material/dzmt-toolbar/dzmt-toolbar.component';
import { DzmtTooltipComponent } from './components/material/dzmt-tooltip/dzmt-tooltip.component';
import { DzmtTreeComponent } from './components/material/dzmt-tree/dzmt-tree.component';
import { ToastrComponent } from './plugins/toastr/toastr.component';
import { SweetAlertComponent } from './plugins/sweet-alert/sweet-alert.component';
import { LightGalleryComponent } from './plugins/light-gallery/light-gallery.component';
import { WgCardComponent } from './pages/widget/wg-card/wg-card.component';
import { WgChartComponent } from './pages/widget/wg-chart/wg-chart.component';
import { WgListComponent } from './pages/widget/wg-list/wg-list.component';
import { ElementsComponent } from './pages/forms/elements/elements.component';
import { EditorComponent } from './pages/forms/editor/editor.component';
import { FormValidationsComponent } from './pages/forms/form-validations/form-validations.component';
import { PickersComponent } from './pages/forms/pickers/pickers.component';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';
import { LockScreenComponent } from './pages/authentication/lock-screen/lock-screen.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { Error400Component } from './pages/error/error400/error400.component';
import { Error403Component } from './pages/error/error403/error403.component';
import { Error404Component } from './pages/error/error404/error404.component';
import { Error500Component } from './pages/error/error500/error500.component';
import { Error503Component } from './pages/error/error503/error503.component';
import { EmptyComponent } from './pages/error/empty/empty.component';
import { ReportComponent } from './pages/report/report.component';
import { CustomersListComponent } from './pages/customers/customers-list/customers-list.component';
import { CustomersAddComponent } from './pages/customers/customers-add/customers-add.component';
import { CustomersChatComponent } from './pages/customers/customers-chat/customers-chat.component';
import { CreateTicketComponent } from './pages/ticket/create-ticket/create-ticket.component';
import { AllTicketComponent } from './pages/ticket/all-ticket/all-ticket.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { EventsComponent } from './pages/events/events.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { PostDetailsComponent } from './pages/apps/post-details/post-details.component';


export const routes: Routes = [
    { path: '', redirectTo: '/admin', pathMatch: 'full' },
    {
        path: 'admin', component: AdminLayoutComponent, children: [
            { path: '', component: DashboardComponent },
            { path: 'index', component: DashboardComponent },
            { path: 'analytics', component: AnalyticsComponent },
            { path: 'events', component: EventsComponent },
            { path: 'orders-list', component: OrderListComponent },
            { path: 'customer-list', component: CustomerListComponent },
            { path: 'reviews', component: ReviewsComponent },

            // Apps
            { path: 'app-profile', component: ProfileComponent },
            { path: 'edit-profile', component: EditProfileComponent },
            { path: 'post-details', component: PostDetailsComponent },
            { path: 'email-compose', component: ComposeComponent },
            { path: 'email-inbox', component: InboxComponent },
            { path: 'email-read', component: ReadComponent },
            { path: 'app-calender', component: CalenderComponent },
            // // Apps- shop
            { path: 'ecom-product-grid', component: ProductGridComponent },
            { path: 'ecom-product-list', component: ProductListComponent },
            { path: 'ecom-product-detail', component: ProductDetailComponent },
            { path: 'ecom-product-order', component: OrderComponent },
            { path: 'ecom-checkout', component: CheckoutComponent },
            { path: 'ecom-invoice', component: InvoiceComponent },
            { path: 'ecom-customers', component: EcomCustomersComponent },

            // Icons --
            { path: 'flat-icons', component: FlatIconsComponent },
            { path: 'svg-icons', component: SvgIconsComponent },

            // Icons --
            { path: 'create-ticket', component: CreateTicketComponent },
            { path: 'all-ticket', component: AllTicketComponent },

            // Customers --
            { path: 'customers-list', component: CustomersListComponent },
            { path: 'customers-add', component: CustomersAddComponent },
            { path: 'customers-chat', component: CustomersChatComponent },

            // Cms
            { path: 'cms-content', component: ContentComponent },
            { path: 'cms-content-add', component: ContentAddComponent },
            { path: 'cms-menus', component: MenusComponent },
            { path: 'cms-email-template', component: EmailTemplateComponent },
            { path: 'cms-email-add', component: EmailAddComponent },
            { path: 'cms-blog', component: BlogComponent },
            { path: 'cms-blog-add', component: BlogAddComponent },
            { path: 'cms-blog-category', component: BlogCategoryComponent },

            // Chart
            { path: 'apex-area', component: AreaComponent },
            { path: 'apex-bar', component: BarComponent },
            { path: 'apex-bubble', component: BubbleComponent },
            { path: 'apex-candlestick', component: CandlestickComponent },
            { path: 'apex-column', component: ColumnComponent },
            { path: 'apex-heatmap', component: HeatmapComponent },
            { path: 'apex-line', component: LineComponent },
            { path: 'apex-mixed', component: MixedComponent },
            { path: 'apex-pie', component: PieComponent },
            { path: 'apex-polar-area', component: PolarAreaComponent },
            { path: 'apex-radar', component: RadarComponent },
            { path: 'apex-radialbar', component: RadialbarComponent },
            { path: 'apex-scatter', component: ScatterComponent },
            { path: 'apex-sparklines', component: SparklinesComponent },
            { path: 'apex-timeline', component: TimelineComponent },
            { path: 'apex-treemap', component: TreemapComponent },

            { path: 'chartjs-general', component: GeneralChartjsComponent },
            { path: 'chartjs-bar', component: BarChartjsComponent },
            { path: 'chartjs-line', component: LineChartjsComponent },
            { path: 'chartjs-area', component: AreaChartjsComponent },
            { path: 'chartjs-bubble', component: BubbleChartjsComponent },
            { path: 'chartjs-animation', component: AnimationChartjsComponent },

            // Bootstrap
            { path: 'ui-accordion', component: AccordionComponent },
            { path: 'ui-alert', component: AlertComponent },
            { path: 'ui-badge', component: BadgeComponent },
            { path: 'ui-button', component: ButtonComponent },
            { path: 'ui-button-group', component: ButtonGroupComponent },
            { path: 'ui-card', component: CardComponent },
            { path: 'ui-carousel', component: CarouselComponent },
            { path: 'ui-dropdown', component: DropdownBtComponent },
            { path: 'ui-grid', component: GridComponent },
            { path: 'ui-list-group', component: ListGroupComponent },
            { path: 'ui-media-object', component: MediaObjectComponent },
            { path: 'ui-modal', component: ModalComponent },
            { path: 'ui-pagination', component: PaginationBtComponent },
            { path: 'ui-popover', component: PopoverComponent },
            { path: 'ui-progressbar', component: ProgressbarComponent },
            { path: 'ui-table', component: TablesComponent },
            { path: 'ui-tab', component: TabsComponent },
            { path: 'ui-typography', component: TypographyComponent },

            // Material
            { path: 'mat-autocomplete', component: DzmtAutocompleteComponent },
            { path: 'mat-badge', component: DzmtBadgeComponent },
            { path: 'mat-bottom-sheet', component: DzmtBottomSheetComponent },
            { path: 'mat-button', component: DzmtButtonComponent },
            { path: 'mat-button-toggle', component: DzmtButtonTonggleComponent },
            { path: 'mat-card', component: DzmtCardComponent },
            { path: 'mat-checkbox', component: DzmtCheckboxComponent },
            { path: 'mat-chips', component: DzmtChipsComponent },
            { path: 'mat-datepicker', component: DzmtDatepickerComponent },
            { path: 'mat-dialog', component: DzmtDialogComponent },
            { path: 'mat-divider', component: DzmtDividerComponent },
            { path: 'mat-expansion', component: DzmtExpansionComponent },
            { path: 'mat-form-field', component: DzmtFormFieldComponent },
            { path: 'mat-grid-list', component: DzmtGridListComponent },
            { path: 'mat-icon', component: DzmtIconComponent },
            { path: 'mat-input', component: DzmtInputComponent },
            { path: 'mat-list', component: DzmtListComponent },
            { path: 'mat-menu', component: DzmtMenuComponent },
            { path: 'mat-paginator', component: DzmtPaginatorComponent },
            { path: 'mat-progress-bar', component: DzmtProgressBarComponent },
            { path: 'mat-progress-spinner', component: DzmtProgressSpinnerComponent },
            { path: 'mat-radio', component: DzmtRadioComponent },
            { path: 'mat-ripple', component: DzmtRippleComponent },
            { path: 'mat-select', component: DzmtSelectComponent },
            { path: 'mat-sidenav', component: DzmtSidenavComponent },
            { path: 'mat-slide-toggle', component: DzmtSlideToggleComponent },
            { path: 'mat-slider', component: DzmtSliderComponent },
            { path: 'mat-snack-bar', component: DzmtSnackBarComponent },
            { path: 'mat-sort', component: DzmtSortComponent },
            { path: 'mat-stepper', component: DzmtStepperComponent },
            { path: 'mat-table', component: DzmtTableComponent },
            { path: 'mat-tab', component: DzmtTabsComponent },
            { path: 'mat-tooltip', component: DzmtTooltipComponent },
            { path: 'mat-tree', component: DzmtTreeComponent },
            { path: 'mat-toolbar', component: DzmtToolbarComponent },

            // plugins --
            { path: 'uc-toastr', component: ToastrComponent },
            { path: 'uc-sweet-alert', component: SweetAlertComponent },
            { path: 'uc-light-gallery', component: LightGalleryComponent },
            // widget --
            { path: 'widget-card', component: WgCardComponent },
            { path: 'widget-chart', component: WgChartComponent },
            { path: 'widget-list', component: WgListComponent },

            // Forms
            { path: 'form-element', component: ElementsComponent },
            { path: 'form-editor', component: EditorComponent },
            { path: 'form-picker', component: PickersComponent },
            { path: 'form-validation', component: FormValidationsComponent },

            { path: 'report', component: ReportComponent },
            { path: 'empty-page', component: EmptyComponent },
        ]
    },
    { path: 'page-register', component: RegisterComponent },
    { path: 'page-login', component: LoginComponent },
    { path: 'page-forgot-password', component: ForgotPasswordComponent },
    { path: 'page-error-400', component: Error400Component },
    { path: 'page-error-403', component: Error403Component },
    { path: 'page-error-404', component: Error404Component },
    { path: 'page-error-500', component: Error500Component },
    { path: 'page-error-503', component: Error503Component },
    { path: 'page-lock-screen', component: LockScreenComponent },
    { path: '**', component: Error404Component },
];
