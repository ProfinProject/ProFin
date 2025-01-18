import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtProgressSpinnerComponent } from './dzmt-progress-spinner.component';

describe('DzmtProgressSpinnerComponent', () => {
  let component: DzmtProgressSpinnerComponent;
  let fixture: ComponentFixture<DzmtProgressSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DzmtProgressSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DzmtProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
