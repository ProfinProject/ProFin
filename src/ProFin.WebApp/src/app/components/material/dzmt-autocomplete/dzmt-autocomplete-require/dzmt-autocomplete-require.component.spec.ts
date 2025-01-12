import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtAutocompleteRequireComponent } from './dzmt-autocomplete-require.component';

describe('DzmtAutocompleteRequireComponent', () => {
  let component: DzmtAutocompleteRequireComponent;
  let fixture: ComponentFixture<DzmtAutocompleteRequireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DzmtAutocompleteRequireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DzmtAutocompleteRequireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
