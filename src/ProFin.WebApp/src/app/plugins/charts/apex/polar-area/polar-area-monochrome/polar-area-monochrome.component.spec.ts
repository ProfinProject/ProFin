import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarAreaMonochromeComponent } from './polar-area-monochrome.component';

describe('PolarAreaMonochromeComponent', () => {
  let component: PolarAreaMonochromeComponent;
  let fixture: ComponentFixture<PolarAreaMonochromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolarAreaMonochromeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolarAreaMonochromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
