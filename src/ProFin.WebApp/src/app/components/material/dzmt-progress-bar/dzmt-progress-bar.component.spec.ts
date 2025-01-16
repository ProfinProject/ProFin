import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtProgressBarComponent } from './dzmt-progress-bar.component';

describe('DzmtProgressBarComponent', () => {
  let component: DzmtProgressBarComponent;
  let fixture: ComponentFixture<DzmtProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DzmtProgressBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DzmtProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
