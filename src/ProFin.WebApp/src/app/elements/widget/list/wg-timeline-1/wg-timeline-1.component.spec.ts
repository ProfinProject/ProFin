import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WgTimeline1Component } from './wg-timeline-1.component';

describe('WgTimeline1Component', () => {
  let component: WgTimeline1Component;
  let fixture: ComponentFixture<WgTimeline1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WgTimeline1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WgTimeline1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
