import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurablePaginatorComponent } from './configurable-paginator.component';

describe('ConfigurablePaginatorComponent', () => {
  let component: ConfigurablePaginatorComponent;
  let fixture: ComponentFixture<ConfigurablePaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurablePaginatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigurablePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
