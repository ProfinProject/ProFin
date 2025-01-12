import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertIconLeftComponent } from './alert-icon-left.component';

describe('AlertIconLeftComponent', () => {
  let component: AlertIconLeftComponent;
  let fixture: ComponentFixture<AlertIconLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertIconLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertIconLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
