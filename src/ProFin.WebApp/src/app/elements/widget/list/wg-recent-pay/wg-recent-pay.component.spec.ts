import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WgRecentPayComponent } from './wg-recent-pay.component';

describe('WgRecentPayComponent', () => {
  let component: WgRecentPayComponent;
  let fixture: ComponentFixture<WgRecentPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WgRecentPayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WgRecentPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
