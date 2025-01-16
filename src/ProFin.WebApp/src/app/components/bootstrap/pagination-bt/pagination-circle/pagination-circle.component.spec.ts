import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationCircleComponent } from './pagination-circle.component';

describe('PaginationCircleComponent', () => {
  let component: PaginationCircleComponent;
  let fixture: ComponentFixture<PaginationCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationCircleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginationCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
