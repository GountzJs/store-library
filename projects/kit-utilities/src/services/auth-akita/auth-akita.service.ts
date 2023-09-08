import { Injectable } from '@angular/core';
import { AuthStoreService } from './auth-store.service';

@Injectable({ providedIn: 'root' })
export class AuthAkitaService {
  constructor(private readonly authStore: AuthStoreService) {}

  initValues(): void {
    const storedState = sessionStorage.getItem('auth');
    if (storedState) {
      const initialState = JSON.parse(storedState);
      this.authStore.setAuth(initialState);
    } else this.authStore.removeAuth();
  }

  login(token: string): void {
    this.authStore.setAuth(token);
  }

  logOut(): void {
    this.authStore.removeAuth();
  }
}
