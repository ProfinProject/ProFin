import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingBarComponent } from './floating-bar.component';

describe('FloatingBarComponent', () => {
  let component: FloatingBarComponent;
  let fixture: ComponentFixture<FloatingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloatingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
