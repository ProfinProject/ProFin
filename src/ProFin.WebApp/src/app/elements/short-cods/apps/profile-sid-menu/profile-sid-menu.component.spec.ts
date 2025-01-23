import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSidMenuComponent } from './profile-sid-menu.component';

describe('ProfileSidMenuComponent', () => {
  let component: ProfileSidMenuComponent;
  let fixture: ComponentFixture<ProfileSidMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSidMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileSidMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
