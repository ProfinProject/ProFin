import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSalesComponent } from './recent-sales.component';

describe('RecentSalesComponent', () => {
  let component: RecentSalesComponent;
  let fixture: ComponentFixture<RecentSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentSalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
