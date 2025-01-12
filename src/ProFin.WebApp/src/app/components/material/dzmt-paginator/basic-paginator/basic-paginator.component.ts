import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-basic-paginator',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './basic-paginator.component.html',
  styleUrl: './basic-paginator.component.css'
})
export class BasicPaginatorComponent {

}
