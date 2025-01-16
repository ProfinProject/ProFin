import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Power2Component } from './power-2.component';

describe('Power2Component', () => {
  let component: Power2Component;
  let fixture: ComponentFixture<Power2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Power2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Power2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
