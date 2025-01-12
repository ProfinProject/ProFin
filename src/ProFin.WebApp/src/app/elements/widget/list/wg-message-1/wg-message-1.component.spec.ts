import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WgMessage1Component } from './wg-message-1.component';

describe('WgMessage1Component', () => {
  let component: WgMessage1Component;
  let fixture: ComponentFixture<WgMessage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WgMessage1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WgMessage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
