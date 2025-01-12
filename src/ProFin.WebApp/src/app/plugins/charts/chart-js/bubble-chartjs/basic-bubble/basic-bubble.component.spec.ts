import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBubbleComponent } from './basic-bubble.component';

describe('BasicBubbleComponent', () => {
  let component: BasicBubbleComponent;
  let fixture: ComponentFixture<BasicBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicBubbleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
