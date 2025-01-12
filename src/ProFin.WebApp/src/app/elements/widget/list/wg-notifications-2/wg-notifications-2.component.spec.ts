import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WgNotifications2Component } from './wg-notifications-2.component';

describe('WgNotifications2Component', () => {
  let component: WgNotifications2Component;
  let fixture: ComponentFixture<WgNotifications2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WgNotifications2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WgNotifications2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
