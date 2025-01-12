import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipWithCustomPositionComponent } from './tooltip-with-custom-position.component';

describe('TooltipWithCustomPositionComponent', () => {
  let component: TooltipWithCustomPositionComponent;
  let fixture: ComponentFixture<TooltipWithCustomPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipWithCustomPositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TooltipWithCustomPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
