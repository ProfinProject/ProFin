import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertWithLinkComponent } from './alert-with-link.component';

describe('AlertWithLinkComponent', () => {
  let component: AlertWithLinkComponent;
  let fixture: ComponentFixture<AlertWithLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertWithLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertWithLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
