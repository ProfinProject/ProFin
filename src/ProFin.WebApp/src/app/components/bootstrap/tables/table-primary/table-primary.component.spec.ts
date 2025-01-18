import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePrimaryComponent } from './table-primary.component';

describe('TablePrimaryComponent', () => {
  let component: TablePrimaryComponent;
  let fixture: ComponentFixture<TablePrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePrimaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
