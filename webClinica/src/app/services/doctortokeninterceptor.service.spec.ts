import { TestBed } from '@angular/core/testing';

import { DoctorTokenInterceptorService } from './doctortokeninterceptor.service';

describe('DoctortokeninterceptorService', () => {
  let service: DoctorTokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorTokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
