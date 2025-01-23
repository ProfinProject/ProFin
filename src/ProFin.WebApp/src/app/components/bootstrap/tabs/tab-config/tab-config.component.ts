import { Component } from '@angular/core';
import { NgbModule, NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tab-config',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './tab-config.component.html',
  styleUrl: './tab-config.component.css'
})
export class TabConfigComponent {
  constructor(config: NgbNavConfig) {
    // customize default values of navs used by this component tree
    config.destroyOnHide = false;
    config.roles = false;
  }

  ngOnInit(): void {
  }
}
