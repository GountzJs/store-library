import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { AuthState, AuthStoreService } from './auth-store.service';

@Injectable({ providedIn: 'root' })
export class AuthQueryService extends Query<AuthState> {
  constructor(protected override store: AuthStoreService) {
    super(store);
  }

  getAll(): Observable<AuthState> {
    return this.select();
  }
}
