import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBasicComponent } from './input-basic.component';

describe('InputBasicComponent', () => {
  let component: InputBasicComponent;
  let fixture: ComponentFixture<InputBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
