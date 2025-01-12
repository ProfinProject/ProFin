import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionGroupsComponent } from './option-groups.component';

describe('OptionGroupsComponent', () => {
  let component: OptionGroupsComponent;
  let fixture: ComponentFixture<OptionGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionGroupsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
