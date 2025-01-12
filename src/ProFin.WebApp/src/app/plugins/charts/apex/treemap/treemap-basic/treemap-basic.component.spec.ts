import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreemapBasicComponent } from './treemap-basic.component';

describe('TreemapBasicComponent', () => {
  let component: TreemapBasicComponent;
  let fixture: ComponentFixture<TreemapBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreemapBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreemapBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
