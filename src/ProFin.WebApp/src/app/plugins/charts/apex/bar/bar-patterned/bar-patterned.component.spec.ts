import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarPatternedComponent } from './bar-patterned.component';

describe('BarPatternedComponent', () => {
  let component: BarPatternedComponent;
  let fixture: ComponentFixture<BarPatternedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarPatternedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarPatternedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
