import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnWithMarkersComponent } from './column-with-markers.component';

describe('ColumnWithMarkersComponent', () => {
  let component: ColumnWithMarkersComponent;
  let fixture: ComponentFixture<ColumnWithMarkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnWithMarkersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnWithMarkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
