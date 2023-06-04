import { TestBed } from '@angular/core/testing';

import { AdminAuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AdminAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
