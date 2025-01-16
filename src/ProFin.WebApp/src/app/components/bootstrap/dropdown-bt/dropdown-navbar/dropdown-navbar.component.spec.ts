import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownNavbarComponent } from './dropdown-navbar.component';

describe('DropdownNavbarComponent', () => {
  let component: DropdownNavbarComponent;
  let fixture: ComponentFixture<DropdownNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
