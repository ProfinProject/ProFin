import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremIpsums1Component } from './lorem-ipsums-1.component';

describe('LoremIpsums1Component', () => {
  let component: LoremIpsums1Component;
  let fixture: ComponentFixture<LoremIpsums1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoremIpsums1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoremIpsums1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
