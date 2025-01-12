import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurableProgressBarComponent } from './configurable-progress-bar.component';

describe('ConfigurableProgressBarComponent', () => {
  let component: ConfigurableProgressBarComponent;
  let fixture: ComponentFixture<ConfigurableProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurableProgressBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigurableProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
