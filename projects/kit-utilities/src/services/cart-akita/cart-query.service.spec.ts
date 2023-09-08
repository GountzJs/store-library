import { TestBed } from '@angular/core/testing';

import { CartQueryService } from './cart-query.service';

describe('CartQueryService', () => {
  let service: CartQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
