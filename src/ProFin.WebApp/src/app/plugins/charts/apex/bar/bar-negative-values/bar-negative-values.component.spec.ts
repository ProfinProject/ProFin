import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarNegativeValuesComponent } from './bar-negative-values.component';

describe('BarNegativeValuesComponent', () => {
  let component: BarNegativeValuesComponent;
  let fixture: ComponentFixture<BarNegativeValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarNegativeValuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarNegativeValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
