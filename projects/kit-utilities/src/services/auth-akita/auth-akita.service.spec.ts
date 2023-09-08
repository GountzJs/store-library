import { TestBed } from '@angular/core/testing';

import { AuthAkitaService } from './auth-akita.service';

describe('AuthAkitaService', () => {
  let service: AuthAkitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthAkitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
