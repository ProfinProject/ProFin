import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationColorComponent } from './pagination-color.component';

describe('PaginationColorComponent', () => {
  let component: PaginationColorComponent;
  let fixture: ComponentFixture<PaginationColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginationColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
