import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBasicComponent } from './slider-basic.component';

describe('SliderBasicComponent', () => {
  let component: SliderBasicComponent;
  let fixture: ComponentFixture<SliderBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
