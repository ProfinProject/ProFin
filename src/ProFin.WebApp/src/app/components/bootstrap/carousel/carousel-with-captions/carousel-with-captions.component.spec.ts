import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselWithCaptionsComponent } from './carousel-with-captions.component';

describe('CarouselWithCaptionsComponent', () => {
  let component: CarouselWithCaptionsComponent;
  let fixture: ComponentFixture<CarouselWithCaptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselWithCaptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselWithCaptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
