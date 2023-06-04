import { TestBed } from '@angular/core/testing';

import { PacienteAuthenticationService } from './paciente-authentication.service';

describe('PacienteAuthenticationService', () => {
  let service: PacienteAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacienteAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
