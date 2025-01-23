import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurableSlideToggleComponent } from './configurable-slide-toggle.component';

describe('ConfigurableSlideToggleComponent', () => {
  let component: ConfigurableSlideToggleComponent;
  let fixture: ComponentFixture<ConfigurableSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurableSlideToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigurableSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
