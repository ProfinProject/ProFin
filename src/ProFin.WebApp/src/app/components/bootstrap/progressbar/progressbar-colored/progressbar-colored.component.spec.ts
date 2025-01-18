import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarColoredComponent } from './progressbar-colored.component';

describe('ProgressbarColoredComponent', () => {
  let component: ProgressbarColoredComponent;
  let fixture: ComponentFixture<ProgressbarColoredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressbarColoredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressbarColoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
