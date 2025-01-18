import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WgNotificationsComponent } from './wg-notifications.component';

describe('WgNotificationsComponent', () => {
  let component: WgNotificationsComponent;
  let fixture: ComponentFixture<WgNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WgNotificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WgNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
