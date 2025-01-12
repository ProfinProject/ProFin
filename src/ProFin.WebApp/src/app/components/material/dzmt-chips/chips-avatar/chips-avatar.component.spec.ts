import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsAvatarComponent } from './chips-avatar.component';

describe('ChipsAvatarComponent', () => {
  let component: ChipsAvatarComponent;
  let fixture: ComponentFixture<ChipsAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipsAvatarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChipsAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
