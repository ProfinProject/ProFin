import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineDumbbellComponent } from './timeline-dumbbell.component';

describe('TimelineDumbbellComponent', () => {
  let component: TimelineDumbbellComponent;
  let fixture: ComponentFixture<TimelineDumbbellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineDumbbellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelineDumbbellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
