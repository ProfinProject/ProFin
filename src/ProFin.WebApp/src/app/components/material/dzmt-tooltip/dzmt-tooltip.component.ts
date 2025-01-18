import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { BasicTooltipComponent } from './basic-tooltip/basic-tooltip.component';
import { TooltipAutoHidingComponent } from './tooltip-auto-hiding/tooltip-auto-hiding.component';
import { TooltipCanBeDisabledComponent } from './tooltip-can-be-disabled/tooltip-can-be-disabled.component';
import { TooltipWithChangingMessageComponent } from './tooltip-with-changing-message/tooltip-with-changing-message.component';
import { TooltipWithCustomClassComponent } from './tooltip-with-custom-class/tooltip-with-custom-class.component';
import { TooltipWithCustomPositionComponent } from './tooltip-with-custom-position/tooltip-with-custom-position.component';
import { TooltipWithHideShowDelayComponent } from './tooltip-with-hide-show-delay/tooltip-with-hide-show-delay.component';
import { TooltipWithShowHideDelayComponent } from './tooltip-with-show-hide-delay/tooltip-with-show-hide-delay.component';
import { TooltipManuallyShowHideComponent } from './tooltip-manually-show-hide/tooltip-manually-show-hide.component';

@Component({
  selector: 'app-dzmt-tooltip',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BasicTooltipComponent,
    TooltipAutoHidingComponent,
    TooltipCanBeDisabledComponent,
    TooltipWithChangingMessageComponent,
    TooltipWithCustomClassComponent,
    TooltipWithCustomPositionComponent,
    TooltipWithHideShowDelayComponent,
    TooltipWithShowHideDelayComponent,
    TooltipManuallyShowHideComponent
  ],
  templateUrl: './dzmt-tooltip.component.html',
  styleUrl: './dzmt-tooltip.component.css'
})
export class DzmtTooltipComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Tooltip',
  }
}
