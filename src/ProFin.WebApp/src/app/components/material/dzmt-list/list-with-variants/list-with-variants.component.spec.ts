import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithVariantsComponent } from './list-with-variants.component';

describe('ListWithVariantsComponent', () => {
  let component: ListWithVariantsComponent;
  let fixture: ComponentFixture<ListWithVariantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWithVariantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListWithVariantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
