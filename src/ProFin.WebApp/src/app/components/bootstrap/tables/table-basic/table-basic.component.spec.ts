import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBasicComponent } from './table-basic.component';

describe('TableBasicComponent', () => {
  let component: TableBasicComponent;
  let fixture: ComponentFixture<TableBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
