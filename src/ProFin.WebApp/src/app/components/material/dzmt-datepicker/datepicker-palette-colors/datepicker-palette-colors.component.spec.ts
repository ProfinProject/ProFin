import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerPaletteColorsComponent } from './datepicker-palette-colors.component';

describe('DatepickerPaletteColorsComponent', () => {
  let component: DatepickerPaletteColorsComponent;
  let fixture: ComponentFixture<DatepickerPaletteColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerPaletteColorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatepickerPaletteColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
