import { Injectable } from '@angular/core';
import {
  FavoriteProduct,
  FavoriteStoreService,
} from './favorite-store.service';

@Injectable({ providedIn: 'root' })
export class FavoriteAkitaService {
  constructor(private favoriteStore: FavoriteStoreService) {}

  initValues(): void {
    const storedState = localStorage.getItem('favorites');
    if (storedState) {
      const initialState = JSON.parse(storedState);
      this.favoriteStore.updateFavorite(initialState);
    }
  }

  getValues(): FavoriteProduct[] {
    return this.favoriteStore.getValue().favorites;
  }

  addProduct(id: string): void {
    const currentProducts = this.favoriteStore.getValue().favorites;
    if (!currentProducts.some((prd) => prd.id === id)) {
      const products = [...currentProducts, { id }];
      this.favoriteStore.updateFavorite(products);
    }
  }

  removeProduct(id: string): void {
    const currentProducts = this.favoriteStore.getValue().favorites;
    if (currentProducts.some((prd) => prd.id === id)) {
      const products = currentProducts.filter((prd) => prd.id !== id);
      this.favoriteStore.updateFavorite(products);
    }
  }
}
