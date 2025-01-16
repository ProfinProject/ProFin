import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWithTooltipComponent } from './modal-with-tooltip.component';

describe('ModalWithTooltipComponent', () => {
  let component: ModalWithTooltipComponent;
  let fixture: ComponentFixture<ModalWithTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalWithTooltipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalWithTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
