import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSelect1Component } from './custom-select1.component';

describe('CustomSelect1Component', () => {
  let component: CustomSelect1Component;
  let fixture: ComponentFixture<CustomSelect1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSelect1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomSelect1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
