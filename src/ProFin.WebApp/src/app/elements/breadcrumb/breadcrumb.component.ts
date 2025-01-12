import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {

  @Input() breadcrumb: any = '';
  currentURL?: string = '';
  breadcrumb_path?: string = '';
  ngOnInit() {
    this.breadcrumb_path = this.breadcrumb.menu_path;
    this.currentURL = this.breadcrumb.currentURL;
  }

}
