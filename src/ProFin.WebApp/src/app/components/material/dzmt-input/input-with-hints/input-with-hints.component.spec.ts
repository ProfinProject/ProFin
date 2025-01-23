import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithHintsComponent } from './input-with-hints.component';

describe('InputWithHintsComponent', () => {
  let component: InputWithHintsComponent;
  let fixture: ComponentFixture<InputWithHintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputWithHintsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputWithHintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
