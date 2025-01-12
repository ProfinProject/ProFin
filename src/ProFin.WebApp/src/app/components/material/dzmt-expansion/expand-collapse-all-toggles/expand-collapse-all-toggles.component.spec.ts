import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandCollapseAllTogglesComponent } from './expand-collapse-all-toggles.component';

describe('ExpandCollapseAllTogglesComponent', () => {
  let component: ExpandCollapseAllTogglesComponent;
  let fixture: ComponentFixture<ExpandCollapseAllTogglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandCollapseAllTogglesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpandCollapseAllTogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
