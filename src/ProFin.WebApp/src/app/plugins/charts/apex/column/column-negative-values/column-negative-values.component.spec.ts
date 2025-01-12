import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnNegativeValuesComponent } from './column-negative-values.component';

describe('ColumnNegativeValuesComponent', () => {
  let component: ColumnNegativeValuesComponent;
  let fixture: ComponentFixture<ColumnNegativeValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnNegativeValuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnNegativeValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
