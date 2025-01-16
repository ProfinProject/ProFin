import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHover2Component } from './table-hover2.component';

describe('TableHover2Component', () => {
  let component: TableHover2Component;
  let fixture: ComponentFixture<TableHover2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableHover2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableHover2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
