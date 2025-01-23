import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSnackBarComponent } from './basic-snack-bar.component';

describe('BasicSnackBarComponent', () => {
  let component: BasicSnackBarComponent;
  let fixture: ComponentFixture<BasicSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSnackBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
