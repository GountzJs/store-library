import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { FavoriteState, FavoriteStoreService } from './favorite-store.service';

@Injectable({
  providedIn: 'root',
})
export class FavoriteQueryService extends Query<FavoriteState> {
  constructor(protected override store: FavoriteStoreService) {
    super(store);
  }

  getAll(): Observable<FavoriteState> {
    return this.select();
  }
}
