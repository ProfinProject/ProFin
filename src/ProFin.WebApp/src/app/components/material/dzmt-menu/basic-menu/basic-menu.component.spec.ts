import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMenuComponent } from './basic-menu.component';

describe('BasicMenuComponent', () => {
  let component: BasicMenuComponent;
  let fixture: ComponentFixture<BasicMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
