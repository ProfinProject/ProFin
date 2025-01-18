import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressiveLineComponent } from './progressive-line.component';

describe('ProgressiveLineComponent', () => {
  let component: ProgressiveLineComponent;
  let fixture: ComponentFixture<ProgressiveLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressiveLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressiveLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
