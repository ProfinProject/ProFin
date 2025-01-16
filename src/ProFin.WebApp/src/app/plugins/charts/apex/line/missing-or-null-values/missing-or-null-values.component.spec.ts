import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingOrNullValuesComponent } from './missing-or-null-values.component';

describe('MissingOrNullValuesComponent', () => {
  let component: MissingOrNullValuesComponent;
  let fixture: ComponentFixture<MissingOrNullValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissingOrNullValuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissingOrNullValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
