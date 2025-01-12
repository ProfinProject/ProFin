import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeterminateProgressBarComponent } from './determinate-progress-bar.component';

describe('DeterminateProgressBarComponent', () => {
  let component: DeterminateProgressBarComponent;
  let fixture: ComponentFixture<DeterminateProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeterminateProgressBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeterminateProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
