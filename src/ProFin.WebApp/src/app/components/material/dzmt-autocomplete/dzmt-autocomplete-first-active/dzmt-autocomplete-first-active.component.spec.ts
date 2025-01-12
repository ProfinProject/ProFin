import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtAutocompleteFirstActiveComponent } from './dzmt-autocomplete-first-active.component';

describe('DzmtAutocompleteFirstActiveComponent', () => {
  let component: DzmtAutocompleteFirstActiveComponent;
  let fixture: ComponentFixture<DzmtAutocompleteFirstActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DzmtAutocompleteFirstActiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DzmtAutocompleteFirstActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
