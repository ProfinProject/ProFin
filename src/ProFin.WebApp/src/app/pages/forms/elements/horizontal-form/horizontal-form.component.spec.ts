import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalFormComponent } from './horizontal-form.component';

describe('HorizontalFormComponent', () => {
  let component: HorizontalFormComponent;
  let fixture: ComponentFixture<HorizontalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizontalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
