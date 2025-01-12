import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtButtonBasicComponent } from './dzmt-button-basic.component';

describe('DzmtButtonBasicComponent', () => {
  let component: DzmtButtonBasicComponent;
  let fixture: ComponentFixture<DzmtButtonBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DzmtButtonBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DzmtButtonBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
