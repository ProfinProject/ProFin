import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerExplicitBackdropSettingComponent } from './drawer-explicit-backdrop-setting.component';

describe('DrawerExplicitBackdropSettingComponent', () => {
  let component: DrawerExplicitBackdropSettingComponent;
  let fixture: ComponentFixture<DrawerExplicitBackdropSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerExplicitBackdropSettingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrawerExplicitBackdropSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
