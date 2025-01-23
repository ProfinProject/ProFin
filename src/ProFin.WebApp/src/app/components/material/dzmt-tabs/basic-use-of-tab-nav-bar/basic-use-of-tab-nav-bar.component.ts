import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-basic-use-of-tab-nav-bar',
  standalone: true,
  imports: [MatTabsModule, MatButtonModule],
  templateUrl: './basic-use-of-tab-nav-bar.component.html',
  styleUrl: './basic-use-of-tab-nav-bar.component.css'
})
export class BasicUseOfTabNavBarComponent {

  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }
}
