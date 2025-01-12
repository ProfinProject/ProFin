import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleAppearanceComponent } from './button-toggle-appearance.component';

describe('ButtonToggleAppearanceComponent', () => {
  let component: ButtonToggleAppearanceComponent;
  let fixture: ComponentFixture<ButtonToggleAppearanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonToggleAppearanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonToggleAppearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
