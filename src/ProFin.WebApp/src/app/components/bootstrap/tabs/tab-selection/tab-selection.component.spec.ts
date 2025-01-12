import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSelectionComponent } from './tab-selection.component';

describe('TabSelectionComponent', () => {
  let component: TabSelectionComponent;
  let fixture: ComponentFixture<TabSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
