import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface CartProduct {
  id: string;
  size: string;
  color: string;
  quantity: number;
}

export interface CartState {
  cart: CartProduct[];
}

export function createCartInitialState(): CartState {
  return {
    cart: [],
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cart' })
export class CartStoreService extends Store<CartState> {
  constructor() {
    super(createCartInitialState());
  }

  updateCart(products: CartProduct[]): void {
    localStorage.setItem('cart', JSON.stringify(products));
    this.update({ cart: products });
  }
}
