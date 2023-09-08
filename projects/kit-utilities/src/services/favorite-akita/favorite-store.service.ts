import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface FavoriteProduct {
  id: string;
}

export interface FavoriteState {
  favorites: FavoriteProduct[];
}

export function createFavoriteInitialState(): FavoriteState {
  return {
    favorites: [],
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'favorites' })
export class FavoriteStoreService extends Store<FavoriteState> {
  constructor() {
    super(createFavoriteInitialState());
  }

  updateFavorite(products: FavoriteProduct[]): void {
    localStorage.setItem('favorites', JSON.stringify(products));
    this.update({ favorites: products });
  }
}
