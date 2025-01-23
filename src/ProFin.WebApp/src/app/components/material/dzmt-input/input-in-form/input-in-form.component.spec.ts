import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInFormComponent } from './input-in-form.component';

describe('InputInFormComponent', () => {
  let component: InputInFormComponent;
  let fixture: ComponentFixture<InputInFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputInFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
