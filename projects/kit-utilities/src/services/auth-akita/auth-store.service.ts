import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface Auth {
  token?: string;
}

export interface AuthState {
  auth: Auth | null;
}

export function createAuthInitialState(): AuthState {
  return {
    auth: null,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStoreService extends Store<AuthState> {
  constructor() {
    super(createAuthInitialState());
  }

  setAuth(token: string): void {
    sessionStorage.setItem('auth', JSON.stringify(token));
    this.update({ auth: { token } });
  }

  removeAuth(): void {
    sessionStorage.removeItem('auth');
    this.destroy();
  }
}
