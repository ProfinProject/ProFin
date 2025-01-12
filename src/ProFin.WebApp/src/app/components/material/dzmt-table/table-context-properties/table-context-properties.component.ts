import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table-context-properties',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table-context-properties.component.html',
  styleUrl: './table-context-properties.component.css'
})
export class TableContextPropertiesComponent {
  displayedColumns: string[] = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
  data: string[] = ['one', 'two', 'three', 'four', 'five'];
}
