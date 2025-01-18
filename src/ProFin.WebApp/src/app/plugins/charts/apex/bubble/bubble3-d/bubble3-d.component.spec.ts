import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bubble3DComponent } from './bubble3-d.component';

describe('Bubble3DComponent', () => {
  let component: Bubble3DComponent;
  let fixture: ComponentFixture<Bubble3DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bubble3DComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Bubble3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
