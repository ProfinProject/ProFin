import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBorderedComponent } from './table-bordered.component';

describe('TableBorderedComponent', () => {
  let component: TableBorderedComponent;
  let fixture: ComponentFixture<TableBorderedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableBorderedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableBorderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
