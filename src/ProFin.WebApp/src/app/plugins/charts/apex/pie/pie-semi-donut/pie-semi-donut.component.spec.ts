import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieSemiDonutComponent } from './pie-semi-donut.component';

describe('PieSemiDonutComponent', () => {
  let component: PieSemiDonutComponent;
  let fixture: ComponentFixture<PieSemiDonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieSemiDonutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PieSemiDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
