import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsChartComponent } from './students-chart.component';

describe('StudentsChartComponent', () => {
  let component: StudentsChartComponent;
  let fixture: ComponentFixture<StudentsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
