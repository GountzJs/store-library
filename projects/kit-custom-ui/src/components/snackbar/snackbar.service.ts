import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StatusSnackbar } from '../../models/enums/statusSnackbar.enum';

@Injectable({ providedIn: 'root' })
export class SnackbarService {
  listener = new BehaviorSubject({
    show: false,
    status: StatusSnackbar.Success,
    message: '',
  });

  ok(message: string): void {
    this.listener.next({ show: true, status: StatusSnackbar.Success, message });
  }

  error(message: string): void {
    this.listener.next({ show: true, status: StatusSnackbar.Error, message });
  }

  hide(): void {
    this.listener.next({ ...this.listener.value, show: false });
  }
}
