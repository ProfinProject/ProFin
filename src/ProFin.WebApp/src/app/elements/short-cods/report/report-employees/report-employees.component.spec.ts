import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEmployeesComponent } from './report-employees.component';

describe('ReportEmployeesComponent', () => {
  let component: ReportEmployeesComponent;
  let fixture: ComponentFixture<ReportEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportEmployeesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
