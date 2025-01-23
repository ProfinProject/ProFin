import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtAutocompleteOptgroupComponent } from './dzmt-autocomplete-optgroup.component';

describe('DzmtAutocompleteOptgroupComponent', () => {
  let component: DzmtAutocompleteOptgroupComponent;
  let fixture: ComponentFixture<DzmtAutocompleteOptgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DzmtAutocompleteOptgroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DzmtAutocompleteOptgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
