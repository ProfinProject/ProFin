import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { CandlestickBasicComponent } from './candlestick-basic/candlestick-basic.component';
import { CandlestickCategoryComponent } from './candlestick-category/candlestick-category.component';
import { CandlestickComboComponent } from './candlestick-combo/candlestick-combo.component';

@Component({
  selector: 'app-candlestick',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CandlestickBasicComponent,
    CandlestickCategoryComponent,
    CandlestickComboComponent
  ],
  templateUrl: './candlestick.component.html',
  styleUrl: './candlestick.component.css'
})
export class CandlestickComponent {
  breadcrumbList = {
    menu_path: 'Apex Chart',
    currentURL: 'Candlestick Charts',
  }
}
