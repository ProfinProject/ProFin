import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WgListComponent } from './wg-list.component';

describe('WgListComponent', () => {
  let component: WgListComponent;
  let fixture: ComponentFixture<WgListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WgListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
