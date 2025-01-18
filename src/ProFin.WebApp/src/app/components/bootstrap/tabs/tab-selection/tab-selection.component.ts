import { Component } from '@angular/core';
import { NgbModule, NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tab-selection',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './tab-selection.component.html',
  styleUrl: './tab-selection.component.css'
})
export class TabSelectionComponent {

  constructor() { }

  active: any;
  disabled = true;

  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 3) {
      changeEvent.preventDefault();
    }
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
    if (this.disabled) {
      this.active = 1;
    }
  }
  
  
  ngOnInit(): void {
  }
}
