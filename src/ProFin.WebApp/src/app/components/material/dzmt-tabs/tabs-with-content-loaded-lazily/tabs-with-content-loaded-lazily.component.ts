import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-tabs-with-content-loaded-lazily',
  templateUrl: './tabs-with-content-loaded-lazily.component.html',
  styleUrl: './tabs-with-content-loaded-lazily.component.css',
  standalone: true,
  imports: [
    MatTabsModule, DatePipe
  ],
})
export class TabsWithContentLoadedLazilyComponent {

  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }
}
