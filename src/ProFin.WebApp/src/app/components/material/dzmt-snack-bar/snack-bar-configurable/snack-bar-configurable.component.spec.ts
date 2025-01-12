import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarConfigurableComponent } from './snack-bar-configurable.component';

describe('SnackBarConfigurableComponent', () => {
  let component: SnackBarConfigurableComponent;
  let fixture: ComponentFixture<SnackBarConfigurableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackBarConfigurableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnackBarConfigurableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
