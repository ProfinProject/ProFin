import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtBasicTonggleComponent } from './dzmt-basic-tonggle.component';

describe('DzmtBasicTonggleComponent', () => {
  let component: DzmtBasicTonggleComponent;
  let fixture: ComponentFixture<DzmtBasicTonggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DzmtBasicTonggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DzmtBasicTonggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
