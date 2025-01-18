import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WgTodoListComponent } from './wg-todo-list.component';

describe('WgTodoListComponent', () => {
  let component: WgTodoListComponent;
  let fixture: ComponentFixture<WgTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WgTodoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WgTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
