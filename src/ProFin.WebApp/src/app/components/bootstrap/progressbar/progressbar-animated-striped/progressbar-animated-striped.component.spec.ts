import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarAnimatedStripedComponent } from './progressbar-animated-striped.component';

describe('ProgressbarAnimatedStripedComponent', () => {
  let component: ProgressbarAnimatedStripedComponent;
  let fixture: ComponentFixture<ProgressbarAnimatedStripedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressbarAnimatedStripedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressbarAnimatedStripedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
