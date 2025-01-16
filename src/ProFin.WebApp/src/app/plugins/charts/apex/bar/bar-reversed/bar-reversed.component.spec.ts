import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarReversedComponent } from './bar-reversed.component';

describe('BarReversedComponent', () => {
  let component: BarReversedComponent;
  let fixture: ComponentFixture<BarReversedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarReversedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarReversedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
