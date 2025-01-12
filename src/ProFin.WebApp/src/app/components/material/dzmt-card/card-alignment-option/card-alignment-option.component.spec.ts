import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlignmentOptionComponent } from './card-alignment-option.component';

describe('CardAlignmentOptionComponent', () => {
  let component: CardAlignmentOptionComponent;
  let fixture: ComponentFixture<CardAlignmentOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAlignmentOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAlignmentOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
