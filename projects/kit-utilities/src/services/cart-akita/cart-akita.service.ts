import { Injectable } from '@angular/core';
import { CartProduct, CartStoreService } from './cart-store.service';

@Injectable({ providedIn: 'root' })
export class CartAkitaService {
  constructor(private cartStore: CartStoreService) {
    window.addEventListener('storage', (event: StorageEvent) => {
      if (event.storageArea === sessionStorage) {
        this.initValues();
      }
    });
  }

  initValues(): void {
    const storedState = localStorage.getItem('cart');
    if (storedState) {
      const initialState = JSON.parse(storedState);
      this.cartStore.updateCart(initialState);
    }
  }

  getValues(): CartProduct[] {
    return this.cartStore.getValue().cart;
  }

  updateCart(products: CartProduct[]): void {
    this.cartStore.updateCart(products);
  }

  addProduct(id: string, size: string, color: string): void {
    const currentProducts = this.cartStore.getValue().cart;
    if (
      currentProducts.some(
        (cart) => cart.id === id && cart.size === size && cart.color === color
      )
    ) {
      this.cartStore.updateCart(
        currentProducts.map((cart) => {
          if (cart.id === id && cart.size === size && cart.color === color) {
            cart.quantity += 1;
          }
          return cart;
        })
      );
    } else {
      const products = [...currentProducts, { id, size, color, quantity: 1 }];
      this.cartStore.updateCart(products);
    }
  }

  removeProduct(id: string, size: string, color: string) {
    const currentProducts = this.cartStore.getValue().cart;
    const idxProduct = currentProducts.findIndex(
      (prd) => prd.id === id && prd.size === size && prd.color === color
    );
    const products = currentProducts.filter(
      (_, idx: number) => idx !== idxProduct
    );
    this.cartStore.updateCart(products);
  }

  minusProduct(id: string, size: string, color?: string) {
    const currentProducts = this.cartStore.getValue().cart;
    if (
      currentProducts.some(
        (cart) => cart.id === id && cart.size === size && cart.color === color
      )
    ) {
      this.cartStore.updateCart(
        currentProducts.map((cart) => {
          if (cart.id === id && cart.size === size && cart.color === color) {
            cart.quantity -= 1;
          }
          return cart;
        })
      );
    }
  }
}
