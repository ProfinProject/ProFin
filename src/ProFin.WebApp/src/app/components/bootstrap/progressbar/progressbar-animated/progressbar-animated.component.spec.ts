import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarAnimatedComponent } from './progressbar-animated.component';

describe('ProgressbarAnimatedComponent', () => {
  let component: ProgressbarAnimatedComponent;
  let fixture: ComponentFixture<ProgressbarAnimatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressbarAnimatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressbarAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
