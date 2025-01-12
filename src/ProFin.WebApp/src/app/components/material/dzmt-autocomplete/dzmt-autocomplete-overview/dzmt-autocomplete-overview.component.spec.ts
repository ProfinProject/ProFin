import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtAutocompleteOverviewComponent } from './dzmt-autocomplete-overview.component';

describe('DzmtAutocompleteOverviewComponent', () => {
  let component: DzmtAutocompleteOverviewComponent;
  let fixture: ComponentFixture<DzmtAutocompleteOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DzmtAutocompleteOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DzmtAutocompleteOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
