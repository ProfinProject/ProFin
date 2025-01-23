import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarProductsOwlComponent } from './similar-products-owl.component';

describe('SimilarProductsOwlComponent', () => {
  let component: SimilarProductsOwlComponent;
  let fixture: ComponentFixture<SimilarProductsOwlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimilarProductsOwlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimilarProductsOwlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
