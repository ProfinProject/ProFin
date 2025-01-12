import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithPrefixesSuffixesComponent } from './input-with-prefixes-suffixes.component';

describe('InputWithPrefixesSuffixesComponent', () => {
  let component: InputWithPrefixesSuffixesComponent;
  let fixture: ComponentFixture<InputWithPrefixesSuffixesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputWithPrefixesSuffixesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputWithPrefixesSuffixesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
