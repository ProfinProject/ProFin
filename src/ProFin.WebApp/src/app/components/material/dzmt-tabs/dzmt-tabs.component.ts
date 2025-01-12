import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { AlignedLabelsComponent } from './aligned-labels/aligned-labels.component';
import { AsynchronouslyLoadingTabContentsComponent } from './asynchronously-loading-tab-contents/asynchronously-loading-tab-contents.component';
import { BasicTabGroupComponent } from './basic-tab-group/basic-tab-group.component';
import { BasicUseOfTabNavBarComponent } from './basic-use-of-tab-nav-bar/basic-use-of-tab-nav-bar.component';
import { TabGroupAnimationsComponent } from './tab-group-animations/tab-group-animations.component';
import { TabsWithContentLoadedLazilyComponent } from './tabs-with-content-loaded-lazily/tabs-with-content-loaded-lazily.component';
import { TabsWithCustomLabelTemplateComponent } from './tabs-with-custom-label-template/tabs-with-custom-label-template.component';
import { TabsWithDynamicHeightComponent } from './tabs-with-dynamic-height/tabs-with-dynamic-height.component';
import { TabsWithHeadersOnBottomComponent } from './tabs-with-headers-on-bottom/tabs-with-headers-on-bottom.component';
import { TabsWithStretchedLabelsComponent } from './tabs-with-stretched-labels/tabs-with-stretched-labels.component';
import { TabsWithThemeOptionsComponent } from './tabs-with-theme-options/tabs-with-theme-options.component';

@Component({
  selector: 'app-dzmt-tabs',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    AlignedLabelsComponent,
    AsynchronouslyLoadingTabContentsComponent,
    BasicTabGroupComponent,
    BasicUseOfTabNavBarComponent,
    TabGroupAnimationsComponent,
    TabsWithContentLoadedLazilyComponent,
    TabsWithCustomLabelTemplateComponent,
    TabsWithDynamicHeightComponent,
    TabsWithHeadersOnBottomComponent,
    TabsWithStretchedLabelsComponent,
    TabsWithThemeOptionsComponent,
  ],
  templateUrl: './dzmt-tabs.component.html',
  styleUrl: './dzmt-tabs.component.css'
})
export class DzmtTabsComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Tab',
  }
}
