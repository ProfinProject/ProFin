import { Component } from '@angular/core';
import { TabBasicComponent } from './tab-basic/tab-basic.component';
import { TabConfigComponent } from './tab-config/tab-config.component';
import { TabCustomStyleComponent } from './tab-custom-style/tab-custom-style.component';
import { TabDynamicComponent } from './tab-dynamic/tab-dynamic.component';
import { TabKeepContentComponent } from './tab-keep-content/tab-keep-content.component';
import { TabMarkupComponent } from './tab-markup/tab-markup.component';
import { TabSelectionComponent } from './tab-selection/tab-selection.component';
import { TabVerticalComponent } from './tab-vertical/tab-vertical.component';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    TabBasicComponent,
    TabConfigComponent,
    TabCustomStyleComponent,
    TabDynamicComponent,
    TabKeepContentComponent,
    TabMarkupComponent,
    TabSelectionComponent,
    TabVerticalComponent
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  breadcrumbList = {
    subTitle: 'Tab',
    menu_path: 'Bootstrap',
    currentURL: 'Tab',
  }
}
