import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabVerticalComponent } from './tab-vertical.component';

describe('TabVerticalComponent', () => {
  let component: TabVerticalComponent;
  let fixture: ComponentFixture<TabVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabVerticalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
