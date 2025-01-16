import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleHeaderFooterRowsComponent } from './multiple-header-footer-rows.component';

describe('MultipleHeaderFooterRowsComponent', () => {
  let component: MultipleHeaderFooterRowsComponent;
  let fixture: ComponentFixture<MultipleHeaderFooterRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleHeaderFooterRowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleHeaderFooterRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
