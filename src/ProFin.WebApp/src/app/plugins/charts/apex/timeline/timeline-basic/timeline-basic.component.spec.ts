import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineBasicComponent } from './timeline-basic.component';

describe('TimelineBasicComponent', () => {
  let component: TimelineBasicComponent;
  let fixture: ComponentFixture<TimelineBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelineBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
