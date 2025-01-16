import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarVerticalBottomComponent } from './progressbar-vertical-bottom.component';

describe('ProgressbarVerticalBottomComponent', () => {
  let component: ProgressbarVerticalBottomComponent;
  let fixture: ComponentFixture<ProgressbarVerticalBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressbarVerticalBottomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressbarVerticalBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
