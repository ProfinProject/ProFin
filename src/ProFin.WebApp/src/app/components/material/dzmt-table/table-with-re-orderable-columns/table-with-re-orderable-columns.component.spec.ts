import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithReOrderableColumnsComponent } from './table-with-re-orderable-columns.component';

describe('TableWithReOrderableColumnsComponent', () => {
  let component: TableWithReOrderableColumnsComponent;
  let fixture: ComponentFixture<TableWithReOrderableColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithReOrderableColumnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableWithReOrderableColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
