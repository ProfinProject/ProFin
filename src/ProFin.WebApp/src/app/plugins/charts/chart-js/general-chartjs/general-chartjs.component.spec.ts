import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralChartjsComponent } from './general-chartjs.component';

describe('GeneralChartjsComponent', () => {
  let component: GeneralChartjsComponent;
  let fixture: ComponentFixture<GeneralChartjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralChartjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
