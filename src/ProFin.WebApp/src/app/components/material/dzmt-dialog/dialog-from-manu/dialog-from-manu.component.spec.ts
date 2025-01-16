import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFromManuComponent } from './dialog-from-manu.component';

describe('DialogFromManuComponent', () => {
  let component: DialogFromManuComponent;
  let fixture: ComponentFixture<DialogFromManuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogFromManuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogFromManuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
