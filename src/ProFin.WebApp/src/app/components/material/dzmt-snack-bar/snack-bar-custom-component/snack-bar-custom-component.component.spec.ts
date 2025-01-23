import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarCustomComponentComponent } from './snack-bar-custom-component.component';

describe('SnackBarCustomComponentComponent', () => {
  let component: SnackBarCustomComponentComponent;
  let fixture: ComponentFixture<SnackBarCustomComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackBarCustomComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnackBarCustomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
