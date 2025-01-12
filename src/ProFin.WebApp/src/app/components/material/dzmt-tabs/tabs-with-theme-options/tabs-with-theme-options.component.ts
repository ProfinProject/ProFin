import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-tabs-with-theme-options',
  standalone: true,
  imports: [MatButtonToggleModule, MatTabsModule],
  templateUrl: './tabs-with-theme-options.component.html',
  styleUrl: './tabs-with-theme-options.component.css'
})
export class TabsWithThemeOptionsComponent {

}
