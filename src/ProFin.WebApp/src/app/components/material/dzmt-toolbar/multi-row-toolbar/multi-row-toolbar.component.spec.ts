import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRowToolbarComponent } from './multi-row-toolbar.component';

describe('MultiRowToolbarComponent', () => {
  let component: MultiRowToolbarComponent;
  let fixture: ComponentFixture<MultiRowToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiRowToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiRowToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
