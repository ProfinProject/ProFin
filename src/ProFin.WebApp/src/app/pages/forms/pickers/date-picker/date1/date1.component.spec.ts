import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Date1Component } from './date1.component';

describe('Date1Component', () => {
  let component: Date1Component;
  let fixture: ComponentFixture<Date1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Date1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Date1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
