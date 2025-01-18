import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableContextPropertiesComponent } from './table-context-properties.component';

describe('TableContextPropertiesComponent', () => {
  let component: TableContextPropertiesComponent;
  let fixture: ComponentFixture<TableContextPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableContextPropertiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableContextPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
