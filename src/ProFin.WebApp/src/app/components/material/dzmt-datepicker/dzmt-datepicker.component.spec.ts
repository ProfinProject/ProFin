import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtDatepickerComponent } from './dzmt-datepicker.component';

describe('DzmtDatepickerComponent', () => {
  let component: DzmtDatepickerComponent;
  let fixture: ComponentFixture<DzmtDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DzmtDatepickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DzmtDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
