import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurableProgressSpinnerComponent } from './configurable-progress-spinner.component';

describe('ConfigurableProgressSpinnerComponent', () => {
  let component: ConfigurableProgressSpinnerComponent;
  let fixture: ComponentFixture<ConfigurableProgressSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurableProgressSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigurableProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
