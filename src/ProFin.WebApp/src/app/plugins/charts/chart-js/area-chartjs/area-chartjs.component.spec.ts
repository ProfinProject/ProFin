import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChartjsComponent } from './area-chartjs.component';

describe('AreaChartjsComponent', () => {
  let component: AreaChartjsComponent;
  let fixture: ComponentFixture<AreaChartjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaChartjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreaChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
