import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtMenuComponent } from './dzmt-menu.component';

describe('DzmtMenuComponent', () => {
  let component: DzmtMenuComponent;
  let fixture: ComponentFixture<DzmtMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DzmtMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DzmtMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
