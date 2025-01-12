import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremIpsums2Component } from './lorem-ipsums-2.component';

describe('LoremIpsums2Component', () => {
  let component: LoremIpsums2Component;
  let fixture: ComponentFixture<LoremIpsums2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoremIpsums2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoremIpsums2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
