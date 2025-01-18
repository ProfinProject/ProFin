import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableStepsComponent } from './editable-steps.component';

describe('EditableStepsComponent', () => {
  let component: EditableStepsComponent;
  let fixture: ComponentFixture<EditableStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditableStepsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditableStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
