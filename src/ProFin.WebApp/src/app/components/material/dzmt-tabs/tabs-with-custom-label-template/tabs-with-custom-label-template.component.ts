import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-tabs-with-custom-label-template',
  standalone: true,
  imports: [MatTabsModule, MatIconModule],
  templateUrl: './tabs-with-custom-label-template.component.html',
  styleUrl: './tabs-with-custom-label-template.component.css'
})
export class TabsWithCustomLabelTemplateComponent {

}
