import { TestBed } from '@angular/core/testing';

import { NgxToastrService } from './ngx-toastr.service';

describe('NgxToastrService', () => {
  let service: NgxToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxToastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
