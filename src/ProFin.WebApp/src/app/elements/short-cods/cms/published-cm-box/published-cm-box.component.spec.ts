import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedCmBoxComponent } from './published-cm-box.component';

describe('PublishedCmBoxComponent', () => {
  let component: PublishedCmBoxComponent;
  let fixture: ComponentFixture<PublishedCmBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishedCmBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublishedCmBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
