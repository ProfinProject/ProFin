import { Component } from '@angular/core';
import { CustomAccordionComponent } from './custom-accordion/custom-accordion.component';
import { NgbAccordionConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [NgbModule, BreadcrumbComponent, CustomAccordionComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  title: string = 'Accordion';
  constructor(config: NgbAccordionConfig) {
    // customize default values of accordions used by this component tree
    config.closeOthers = true;
  }
  breadcrumbList = {
    subTitle: 'Accordion',
    menu_path: 'Bootstrap',
    currentURL: 'Accordion',
  }


  accordion = [
    {
      defaultAccordion: [{ hedingClass: 'accordion-primary' }]
    },
    {
      borderedAccordion: [{ hedingClass: 'accordion-danger-solid' }]
    },
    {
      withoutspaceAccordion: [{ hedingClass: 'accordion-no-gutter accordion-header-bg' }]
    },
    {
      withoutSpaceBorderAccordion: [{ hedingClass: 'accordion-no-gutter accordion-bordered' }]
    },
    {
      leftPositionAccordion: [{ hedingClass: 'accordion accordion-left-indicator', postion: 'accordion-header-text' }]
    },
    {
      withIconAccordion: [{ hedingClass: 'accordion-with-icon', postion: 'accordion-header-text', icon: 'accordion-header-icon' }]
    },
    {
      headerBgAccordion: [{ hedingClass: 'accordion-header-bg accordion-bordered', bg:true }]
    },
    {
      solidBgAccordion: [{ hedingClass: 'accordion-solid-bg' }]
    },
    {
      activeBgAccordion: [{ hedingClass: 'accordion-active-header' }]
    },
    {
      herderShadowAccordion: [{ hedingClass: 'accordion-header-shadow accordion-rounded' }]
    },
    {
      roundedStylishAccordion: [{ hedingClass: 'accordion-rounded-stylish accordion-bordered' }]
    },
    {
      gradientAccordion: [{ hedingClass: 'accordion-gradient accordion-rounded-stylish' }]
    },
  ]

}
