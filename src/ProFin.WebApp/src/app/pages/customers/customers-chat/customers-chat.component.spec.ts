import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersChatComponent } from './customers-chat.component';

describe('CustomersChatComponent', () => {
  let component: CustomersChatComponent;
  let fixture: ComponentFixture<CustomersChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersChatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomersChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
