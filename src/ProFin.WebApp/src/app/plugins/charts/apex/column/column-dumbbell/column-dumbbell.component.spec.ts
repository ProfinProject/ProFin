import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnDumbbellComponent } from './column-dumbbell.component';

describe('ColumnDumbbellComponent', () => {
  let component: ColumnDumbbellComponent;
  let fixture: ComponentFixture<ColumnDumbbellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnDumbbellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnDumbbellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
