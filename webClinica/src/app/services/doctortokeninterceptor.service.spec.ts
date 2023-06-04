import { TestBed } from '@angular/core/testing';

import { DoctortokeninterceptorService } from './doctortokeninterceptor.service';

describe('DoctortokeninterceptorService', () => {
  let service: DoctortokeninterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctortokeninterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
