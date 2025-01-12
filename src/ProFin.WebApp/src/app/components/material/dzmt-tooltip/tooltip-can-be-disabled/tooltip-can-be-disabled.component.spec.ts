import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipCanBeDisabledComponent } from './tooltip-can-be-disabled.component';

describe('TooltipCanBeDisabledComponent', () => {
  let component: TooltipCanBeDisabledComponent;
  let fixture: ComponentFixture<TooltipCanBeDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipCanBeDisabledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TooltipCanBeDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
