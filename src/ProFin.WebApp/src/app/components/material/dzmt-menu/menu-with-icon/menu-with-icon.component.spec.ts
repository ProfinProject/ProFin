import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuWithIconComponent } from './menu-with-icon.component';

describe('MenuWithIconComponent', () => {
  let component: MenuWithIconComponent;
  let fixture: ComponentFixture<MenuWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuWithIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
