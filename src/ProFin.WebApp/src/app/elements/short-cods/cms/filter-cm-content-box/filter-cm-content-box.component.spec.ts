import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCmContentBoxComponent } from './filter-cm-content-box.component';

describe('FilterCmContentBoxComponent', () => {
  let component: FilterCmContentBoxComponent;
  let fixture: ComponentFixture<FilterCmContentBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterCmContentBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterCmContentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
