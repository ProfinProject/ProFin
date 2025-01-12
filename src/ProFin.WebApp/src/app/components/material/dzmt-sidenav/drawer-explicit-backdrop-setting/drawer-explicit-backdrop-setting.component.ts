import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-drawer-explicit-backdrop-setting',
  standalone: true,
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
  templateUrl: './drawer-explicit-backdrop-setting.component.html',
  styleUrl: './drawer-explicit-backdrop-setting.component.css'
})
export class DrawerExplicitBackdropSettingComponent {
  direction: any;
  ngDoCheck() {
    if(document.body.getAttribute('direction') == 'rtl'){
      this.direction = 'rtl';
    } else {
      this.direction = 'ltr';
    }
  }
}
