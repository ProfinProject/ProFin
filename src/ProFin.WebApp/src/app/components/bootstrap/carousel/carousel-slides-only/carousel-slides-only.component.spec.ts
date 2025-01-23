import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSlidesOnlyComponent } from './carousel-slides-only.component';

describe('CarouselSlidesOnlyComponent', () => {
  let component: CarouselSlidesOnlyComponent;
  let fixture: ComponentFixture<CarouselSlidesOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselSlidesOnlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselSlidesOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
