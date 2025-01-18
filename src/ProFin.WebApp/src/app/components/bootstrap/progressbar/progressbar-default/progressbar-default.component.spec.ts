import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarDefaultComponent } from './progressbar-default.component';

describe('ProgressbarDefaultComponent', () => {
  let component: ProgressbarDefaultComponent;
  let fixture: ComponentFixture<ProgressbarDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressbarDefaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressbarDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
