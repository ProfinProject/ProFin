import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnStackedComponent } from './column-stacked.component';

describe('ColumnStackedComponent', () => {
  let component: ColumnStackedComponent;
  let fixture: ComponentFixture<ColumnStackedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnStackedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnStackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
