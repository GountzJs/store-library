import { TestBed } from '@angular/core/testing';

import { FavoriteAkitaService } from './favorite-akita.service';

describe('FavoriteAkitaService', () => {
  let service: FavoriteAkitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteAkitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
