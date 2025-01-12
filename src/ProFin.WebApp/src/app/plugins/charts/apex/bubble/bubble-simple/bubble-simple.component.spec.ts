import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleSimpleComponent } from './bubble-simple.component';

describe('BubbleSimpleComponent', () => {
  let component: BubbleSimpleComponent;
  let fixture: ComponentFixture<BubbleSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubbleSimpleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BubbleSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
