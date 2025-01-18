import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownBtComponent } from './dropdown-bt.component';

describe('DropdownBtComponent', () => {
  let component: DropdownBtComponent;
  let fixture: ComponentFixture<DropdownBtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownBtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownBtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
