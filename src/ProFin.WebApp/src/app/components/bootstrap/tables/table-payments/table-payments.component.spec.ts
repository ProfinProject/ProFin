import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaymentsComponent } from './table-payments.component';

describe('TablePaymentsComponent', () => {
  let component: TablePaymentsComponent;
  let fixture: ComponentFixture<TablePaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePaymentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
