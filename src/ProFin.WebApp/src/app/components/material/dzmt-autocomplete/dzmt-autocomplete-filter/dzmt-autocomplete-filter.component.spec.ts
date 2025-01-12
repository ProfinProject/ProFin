import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtAutocompleteFilterComponent } from './dzmt-autocomplete-filter.component';

describe('DzmtAutocompleteFilterComponent', () => {
  let component: DzmtAutocompleteFilterComponent;
  let fixture: ComponentFixture<DzmtAutocompleteFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DzmtAutocompleteFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DzmtAutocompleteFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
