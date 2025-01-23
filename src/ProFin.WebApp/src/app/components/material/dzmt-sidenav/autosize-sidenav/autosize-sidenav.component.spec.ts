import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosizeSidenavComponent } from './autosize-sidenav.component';

describe('AutosizeSidenavComponent', () => {
  let component: AutosizeSidenavComponent;
  let fixture: ComponentFixture<AutosizeSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutosizeSidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutosizeSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
