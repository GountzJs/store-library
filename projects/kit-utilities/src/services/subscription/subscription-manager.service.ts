import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SubscriptionManagerService {
  private _subscriptions: Subscription[];
  private _loaders: { [key: string]: boolean };

  constructor() {
    this.subscriptions = [];
    this.loaders = {};
  }

  isLoading(key: string): boolean {
    return this.loaders[key] ?? false;
  }

  load(key: string, sub: Subscription): void {
    this.loaders = { [key]: true };
    this.subscriptions = [...this.subscriptions, sub];
    sub.add(() => (this.loaders = { [key]: false }));
  }

  destroy(): void {
    this.subscriptions.map((sub) => sub.unsubscribe());
    this.subscriptions = this.subscriptions.filter((sub) => !sub.closed);
  }

  get loaders(): { [key: string]: boolean } {
    return this._loaders;
  }

  set loaders(load: { [key: string]: boolean }) {
    this._loaders = { ...this.loaders, ...load };
  }

  get subscriptions() {
    return this._subscriptions;
  }

  set subscriptions(subs: Subscription[]) {
    this._subscriptions = subs;
  }
}
