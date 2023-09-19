import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  listener: BehaviorSubject<{ auth: { token: string | null } }> =
    new BehaviorSubject({
      auth: { token: sessionStorage.getItem('token') || null },
    });

  login(token: string): void {
    sessionStorage.setItem('token', token);
    this.listener.next({ auth: { token } });
  }

  logOut(): void {
    sessionStorage.clear();
    this.listener.next({ auth: { token: null } });
  }
}
