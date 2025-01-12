import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSquareComponent } from './alert-square.component';

describe('AlertSquareComponent', () => {
  let component: AlertSquareComponent;
  let fixture: ComponentFixture<AlertSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertSquareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
