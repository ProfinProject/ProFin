import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { ProgressbarAnimatedComponent } from './progressbar-animated/progressbar-animated.component';
import { ProgressbarAnimatedStripedComponent } from './progressbar-animated-striped/progressbar-animated-striped.component';
import { ProgressbarColoredComponent } from './progressbar-colored/progressbar-colored.component';
import { ProgressbarDefaultComponent } from './progressbar-default/progressbar-default.component';
import { ProgressbarDifferentSizeComponent } from './progressbar-different-size/progressbar-different-size.component';
import { ProgressbarSkillComponent } from './progressbar-skill/progressbar-skill.component';
import { ProgressbarStripedComponent } from './progressbar-striped/progressbar-striped.component';
import { ProgressbarVerticalBottomComponent } from './progressbar-vertical-bottom/progressbar-vertical-bottom.component';
import { ProgressbarVerticalTopComponent } from './progressbar-vertical-top/progressbar-vertical-top.component';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    ProgressbarAnimatedComponent,
    ProgressbarAnimatedStripedComponent,
    ProgressbarColoredComponent,
    ProgressbarDefaultComponent,
    ProgressbarDifferentSizeComponent,
    ProgressbarSkillComponent,
    ProgressbarStripedComponent,
    ProgressbarVerticalBottomComponent,
    ProgressbarVerticalTopComponent
  ],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.css'
})
export class ProgressbarComponent {
  breadcrumbList = {
    subTitle: 'Progressbar',
    menu_path: 'Bootstrap',
    currentURL: 'Progressbar',
  }
}
