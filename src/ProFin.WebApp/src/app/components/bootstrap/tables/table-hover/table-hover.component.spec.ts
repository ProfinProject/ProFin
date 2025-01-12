import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHoverComponent } from './table-hover.component';

describe('TableHoverComponent', () => {
  let component: TableHoverComponent;
  let fixture: ComponentFixture<TableHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableHoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
