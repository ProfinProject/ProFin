import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationBtComponent } from './pagination-bt.component';

describe('PaginationBtComponent', () => {
  let component: PaginationBtComponent;
  let fixture: ComponentFixture<PaginationBtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationBtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginationBtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
