import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiosBasicComponent } from './radios-basic.component';

describe('RadiosBasicComponent', () => {
  let component: RadiosBasicComponent;
  let fixture: ComponentFixture<RadiosBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadiosBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadiosBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
