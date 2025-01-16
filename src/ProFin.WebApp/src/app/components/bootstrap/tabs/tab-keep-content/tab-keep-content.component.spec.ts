import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabKeepContentComponent } from './tab-keep-content.component';

describe('TabKeepContentComponent', () => {
  let component: TabKeepContentComponent;
  let fixture: ComponentFixture<TabKeepContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabKeepContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabKeepContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
