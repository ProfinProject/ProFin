import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStripped2Component } from './table-stripped2.component';

describe('TableStripped2Component', () => {
  let component: TableStripped2Component;
  let fixture: ComponentFixture<TableStripped2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableStripped2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableStripped2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
