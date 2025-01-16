import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnBasicComponent } from './column-basic.component';

describe('ColumnBasicComponent', () => {
  let component: ColumnBasicComponent;
  let fixture: ComponentFixture<ColumnBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
