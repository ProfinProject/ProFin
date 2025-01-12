import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBordered2Component } from './table-bordered2.component';

describe('TableBordered2Component', () => {
  let component: TableBordered2Component;
  let fixture: ComponentFixture<TableBordered2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableBordered2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableBordered2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
