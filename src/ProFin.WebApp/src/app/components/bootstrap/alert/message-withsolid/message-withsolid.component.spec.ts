import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageWithsolidComponent } from './message-withsolid.component';

describe('MessageWithsolidComponent', () => {
  let component: MessageWithsolidComponent;
  let fixture: ComponentFixture<MessageWithsolidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageWithsolidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageWithsolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
