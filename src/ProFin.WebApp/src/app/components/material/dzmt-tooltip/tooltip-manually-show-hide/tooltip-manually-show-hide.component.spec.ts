import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipManuallyShowHideComponent } from './tooltip-manually-show-hide.component';

describe('TooltipManuallyShowHideComponent', () => {
  let component: TooltipManuallyShowHideComponent;
  let fixture: ComponentFixture<TooltipManuallyShowHideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipManuallyShowHideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TooltipManuallyShowHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
