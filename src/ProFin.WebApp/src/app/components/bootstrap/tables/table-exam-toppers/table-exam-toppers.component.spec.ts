import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExamToppersComponent } from './table-exam-toppers.component';

describe('TableExamToppersComponent', () => {
  let component: TableExamToppersComponent;
  let fixture: ComponentFixture<TableExamToppersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableExamToppersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableExamToppersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
