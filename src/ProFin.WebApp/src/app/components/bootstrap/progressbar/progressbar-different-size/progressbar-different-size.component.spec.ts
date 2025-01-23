import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarDifferentSizeComponent } from './progressbar-different-size.component';

describe('ProgressbarDifferentSizeComponent', () => {
  let component: ProgressbarDifferentSizeComponent;
  let fixture: ComponentFixture<ProgressbarDifferentSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressbarDifferentSizeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressbarDifferentSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
