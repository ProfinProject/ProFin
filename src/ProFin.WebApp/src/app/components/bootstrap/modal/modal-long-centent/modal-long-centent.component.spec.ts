import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLongCententComponent } from './modal-long-centent.component';

describe('ModalLongCententComponent', () => {
  let component: ModalLongCententComponent;
  let fixture: ComponentFixture<ModalLongCententComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalLongCententComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalLongCententComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
