import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSelectComponent } from './basic-select.component';

describe('BasicSelectComponent', () => {
  let component: BasicSelectComponent;
  let fixture: ComponentFixture<BasicSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
