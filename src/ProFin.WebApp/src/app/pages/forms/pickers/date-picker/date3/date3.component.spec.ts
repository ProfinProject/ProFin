import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Date3Component } from './date3.component';

describe('Date3Component', () => {
  let component: Date3Component;
  let fixture: ComponentFixture<Date3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Date3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Date3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
