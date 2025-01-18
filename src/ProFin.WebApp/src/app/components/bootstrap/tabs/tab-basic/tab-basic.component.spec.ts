import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBasicComponent } from './tab-basic.component';

describe('TabBasicComponent', () => {
  let component: TabBasicComponent;
  let fixture: ComponentFixture<TabBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
