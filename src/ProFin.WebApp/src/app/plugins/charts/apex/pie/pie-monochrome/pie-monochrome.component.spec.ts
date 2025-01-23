import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieMonochromeComponent } from './pie-monochrome.component';

describe('PieMonochromeComponent', () => {
  let component: PieMonochromeComponent;
  let fixture: ComponentFixture<PieMonochromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieMonochromeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PieMonochromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
