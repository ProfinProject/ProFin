import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSlidesCaptionsComponent } from './carousel-slides-captions.component';

describe('CarouselSlidesCaptionsComponent', () => {
  let component: CarouselSlidesCaptionsComponent;
  let fixture: ComponentFixture<CarouselSlidesCaptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselSlidesCaptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselSlidesCaptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
