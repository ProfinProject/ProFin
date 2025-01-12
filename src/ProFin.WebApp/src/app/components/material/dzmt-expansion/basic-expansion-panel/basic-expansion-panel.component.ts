import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-basic-expansion-panel',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './basic-expansion-panel.component.html',
  styleUrl: './basic-expansion-panel.component.css'
})
export class BasicExpansionPanelComponent {
  panelOpenState = false;
}
