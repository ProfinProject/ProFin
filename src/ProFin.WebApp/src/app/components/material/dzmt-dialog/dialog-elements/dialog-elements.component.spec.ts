import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogElementsComponent } from './dialog-elements.component';

describe('DialogElementsComponent', () => {
  let component: DialogElementsComponent;
  let fixture: ComponentFixture<DialogElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogElementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
