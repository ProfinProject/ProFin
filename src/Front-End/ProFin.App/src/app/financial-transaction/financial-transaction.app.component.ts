import { Component } from '@angular/core';

@Component({
  selector: 'app-financial-transaction-root',
  template: `
    <div class="container main-container">
      <router-outlet></router-outlet>
    </div>
  `,
  standalone: false
})
export class FinancialTransactionAppComponent { }
