import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnRotatedLabelsComponent } from './column-rotated-labels.component';

describe('ColumnRotatedLabelsComponent', () => {
  let component: ColumnRotatedLabelsComponent;
  let fixture: ComponentFixture<ColumnRotatedLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnRotatedLabelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnRotatedLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
