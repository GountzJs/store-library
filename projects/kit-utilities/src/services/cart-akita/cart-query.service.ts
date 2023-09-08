import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { CartState, CartStoreService } from './cart-store.service';

@Injectable({ providedIn: 'root' })
export class CartQueryService extends Query<CartState> {
  constructor(protected override store: CartStoreService) {
    super(store);
  }

  getAll(): Observable<CartState> {
    return this.select();
  }
}
