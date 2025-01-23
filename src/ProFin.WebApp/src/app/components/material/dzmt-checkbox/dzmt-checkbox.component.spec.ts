import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtCheckboxComponent } from './dzmt-checkbox.component';

describe('DzmtCheckboxComponent', () => {
  let component: DzmtCheckboxComponent;
  let fixture: ComponentFixture<DzmtCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DzmtCheckboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DzmtCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
