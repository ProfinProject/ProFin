import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRowTableComponent } from './footer-row-table.component';

describe('FooterRowTableComponent', () => {
  let component: FooterRowTableComponent;
  let fixture: ComponentFixture<FooterRowTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterRowTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterRowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
