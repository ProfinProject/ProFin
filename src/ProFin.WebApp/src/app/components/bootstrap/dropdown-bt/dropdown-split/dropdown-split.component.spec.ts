import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSplitComponent } from './dropdown-split.component';

describe('DropdownSplitComponent', () => {
  let component: DropdownSplitComponent;
  let fixture: ComponentFixture<DropdownSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownSplitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
