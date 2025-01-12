import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicExpansionPanelComponent } from './basic-expansion-panel.component';

describe('BasicExpansionPanelComponent', () => {
  let component: BasicExpansionPanelComponent;
  let fixture: ComponentFixture<BasicExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicExpansionPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
