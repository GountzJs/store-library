import { TestBed } from '@angular/core/testing';

import { CartAkitaService } from './cart-akita.service';

describe('CartService', () => {
  let service: CartAkitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartAkitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
