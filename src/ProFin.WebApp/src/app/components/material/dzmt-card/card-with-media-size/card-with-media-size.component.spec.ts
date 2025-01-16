import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithMediaSizeComponent } from './card-with-media-size.component';

describe('CardWithMediaSizeComponent', () => {
  let component: CardWithMediaSizeComponent;
  let fixture: ComponentFixture<CardWithMediaSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWithMediaSizeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardWithMediaSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
