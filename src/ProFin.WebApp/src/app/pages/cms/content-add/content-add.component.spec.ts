import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAddComponent } from './content-add.component';

describe('ContentAddComponent', () => {
  let component: ContentAddComponent;
  let fixture: ComponentFixture<ContentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
