import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGroupedComponent } from './bar-grouped.component';

describe('BarGroupedComponent', () => {
  let component: BarGroupedComponent;
  let fixture: ComponentFixture<BarGroupedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarGroupedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarGroupedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
