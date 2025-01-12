import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTriggerTextComponent } from './custom-trigger-text.component';

describe('CustomTriggerTextComponent', () => {
  let component: CustomTriggerTextComponent;
  let fixture: ComponentFixture<CustomTriggerTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomTriggerTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomTriggerTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
