import { TestBed } from '@angular/core/testing';

import { FavoriteQueryService } from './favorite-query.service';

describe('FavoriteQueryService', () => {
  let service: FavoriteQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
