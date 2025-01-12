import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedLineColumnAreaComponent } from './mixed-line-column-area.component';

describe('MixedLineColumnAreaComponent', () => {
  let component: MixedLineColumnAreaComponent;
  let fixture: ComponentFixture<MixedLineColumnAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixedLineColumnAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MixedLineColumnAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
