import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnRangeComponent } from './column-range.component';

describe('ColumnRangeComponent', () => {
  let component: ColumnRangeComponent;
  let fixture: ComponentFixture<ColumnRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnRangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
