import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearanceVariantsComponent } from './appearance-variants.component';

describe('AppearanceVariantsComponent', () => {
  let component: AppearanceVariantsComponent;
  let fixture: ComponentFixture<AppearanceVariantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppearanceVariantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppearanceVariantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
