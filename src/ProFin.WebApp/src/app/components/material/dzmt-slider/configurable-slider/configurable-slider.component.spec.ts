import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurableSliderComponent } from './configurable-slider.component';

describe('ConfigurableSliderComponent', () => {
  let component: ConfigurableSliderComponent;
  let fixture: ComponentFixture<ConfigurableSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurableSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigurableSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
