import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaBasicComponent } from './area-basic.component';

describe('AreaBasicComponent', () => {
  let component: AreaBasicComponent;
  let fixture: ComponentFixture<AreaBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreaBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
