import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tab-dynamic',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './tab-dynamic.component.html',
  styleUrl: './tab-dynamic.component.css'
})
export class TabDynamicComponent {
  constructor() { }
  
  tabs = [1, 2, 3, 4, 5];
 counter = this.tabs.length + 1;
 active: any;

 close(event: MouseEvent, toRemove: number) {
   this.tabs = this.tabs.filter(id => id !== toRemove);
   event.preventDefault();
   event.stopImmediatePropagation();
 }

 add(event: MouseEvent) {
   this.tabs.push(this.counter++);
   event.preventDefault();
 }
 
 ngOnInit(): void {
 }
}
