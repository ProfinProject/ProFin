import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSlidesIndicatorsComponent } from './carousel-slides-indicators.component';

describe('CarouselSlidesIndicatorsComponent', () => {
  let component: CarouselSlidesIndicatorsComponent;
  let fixture: ComponentFixture<CarouselSlidesIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselSlidesIndicatorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselSlidesIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
