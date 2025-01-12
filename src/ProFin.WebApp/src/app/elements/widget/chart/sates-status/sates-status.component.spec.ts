import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatesStatusComponent } from './sates-status.component';

describe('SatesStatusComponent', () => {
  let component: SatesStatusComponent;
  let fixture: ComponentFixture<SatesStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SatesStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SatesStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
