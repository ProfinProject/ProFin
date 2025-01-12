import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestSalesComponent } from './latest-sales.component';

describe('LatestSalesComponent', () => {
  let component: LatestSalesComponent;
  let fixture: ComponentFixture<LatestSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestSalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
