import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { CustomStepperComponent } from './custom-stepper/custom-stepper.component';
import { DisplaysErrorsInStepsComponent } from './displays-errors-in-steps/displays-errors-in-steps.component';
import { EditableStepsComponent } from './editable-steps/editable-steps.component';
import { OptionalStepsComponent } from './optional-steps/optional-steps.component';
import { StepperAnimationsComponent } from './stepper-animations/stepper-animations.component';
import { StepperCustomizedStatesComponent } from './stepper-customized-states/stepper-customized-states.component';
import { StepperHeaderPositionComponent } from './stepper-header-position/stepper-header-position.component';
import { StepperOverviewComponent } from './stepper-overview/stepper-overview.component';
import { StepperVerticalComponent } from './stepper-vertical/stepper-vertical.component';
import { LabelBottomPositionComponent } from './label-bottom-position/label-bottom-position.component';
import { MatStepperIntlServiceComponent } from './mat-stepper-intl-service/mat-stepper-intl-service.component';
import { StepperLazyContentRenderingComponent } from './stepper-lazy-content-rendering/stepper-lazy-content-rendering.component';
import { StepperResponsiveComponent } from './stepper-responsive/stepper-responsive.component';

@Component({
  selector: 'app-dzmt-stepper',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CustomStepperComponent,
    DisplaysErrorsInStepsComponent,
    EditableStepsComponent,
    OptionalStepsComponent,
    StepperAnimationsComponent,
    StepperCustomizedStatesComponent,
    StepperHeaderPositionComponent,
    StepperOverviewComponent,
    StepperVerticalComponent,
    StepperResponsiveComponent,
    LabelBottomPositionComponent,
    MatStepperIntlServiceComponent,
    StepperLazyContentRenderingComponent
  ],
  templateUrl: './dzmt-stepper.component.html',
  styleUrl: './dzmt-stepper.component.css'
})
export class DzmtStepperComponent {
  breadcrumbList = {
    menu_path: 'Material',
    currentURL: 'Stepper',
  }
}
