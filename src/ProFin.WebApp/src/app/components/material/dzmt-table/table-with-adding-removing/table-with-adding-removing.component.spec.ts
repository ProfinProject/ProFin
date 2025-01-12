import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithAddingRemovingComponent } from './table-with-adding-removing.component';

describe('TableWithAddingRemovingComponent', () => {
  let component: TableWithAddingRemovingComponent;
  let fixture: ComponentFixture<TableWithAddingRemovingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithAddingRemovingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableWithAddingRemovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
