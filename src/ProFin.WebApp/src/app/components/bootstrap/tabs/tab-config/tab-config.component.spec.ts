import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabConfigComponent } from './tab-config.component';

describe('TabConfigComponent', () => {
  let component: TabConfigComponent;
  let fixture: ComponentFixture<TabConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
