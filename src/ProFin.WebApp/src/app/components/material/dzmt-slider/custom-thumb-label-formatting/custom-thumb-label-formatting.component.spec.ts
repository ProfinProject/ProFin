import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomThumbLabelFormattingComponent } from './custom-thumb-label-formatting.component';

describe('CustomThumbLabelFormattingComponent', () => {
  let component: CustomThumbLabelFormattingComponent;
  let fixture: ComponentFixture<CustomThumbLabelFormattingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomThumbLabelFormattingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomThumbLabelFormattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
