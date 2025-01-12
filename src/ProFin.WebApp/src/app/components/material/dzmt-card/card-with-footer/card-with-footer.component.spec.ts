import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithFooterComponent } from './card-with-footer.component';

describe('CardWithFooterComponent', () => {
  let component: CardWithFooterComponent;
  let fixture: ComponentFixture<CardWithFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWithFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardWithFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
