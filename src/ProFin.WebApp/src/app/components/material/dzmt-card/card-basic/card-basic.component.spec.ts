import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBasicComponent } from './card-basic.component';

describe('CardBasicComponent', () => {
  let component: CardBasicComponent;
  let fixture: ComponentFixture<CardBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
