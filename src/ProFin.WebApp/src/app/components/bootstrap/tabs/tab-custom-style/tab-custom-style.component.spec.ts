import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCustomStyleComponent } from './tab-custom-style.component';

describe('TabCustomStyleComponent', () => {
  let component: TabCustomStyleComponent;
  let fixture: ComponentFixture<TabCustomStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabCustomStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabCustomStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
