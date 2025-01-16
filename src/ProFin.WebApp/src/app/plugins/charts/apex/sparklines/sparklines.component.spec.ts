import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparklinesComponent } from './sparklines.component';

describe('SparklinesComponent', () => {
  let component: SparklinesComponent;
  let fixture: ComponentFixture<SparklinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SparklinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SparklinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
