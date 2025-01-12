import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() page = '';
  @Input() totalPage = '';
  @Output() newPage = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('Child Componet-', this.totalPage)
  }
  pageChang(item: any) {
    this.page = item
    this.newPage.emit(item);
  }

  counter(i: number) {
    return new Array(i);
  }
}
