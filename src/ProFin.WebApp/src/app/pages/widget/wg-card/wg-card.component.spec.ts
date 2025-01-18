import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WgCardComponent } from './wg-card.component';

describe('WgCardComponent', () => {
  let component: WgCardComponent;
  let fixture: ComponentFixture<WgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WgCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
