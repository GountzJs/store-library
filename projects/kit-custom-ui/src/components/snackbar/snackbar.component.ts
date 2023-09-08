import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StatusSnackbar } from '../../models/enums/statusSnackbar.enum';
import { SnackbarService } from './snackbar.service';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit {
  private _showSnackbar: boolean;
  private _message: string;
  private _status: StatusSnackbar;
  private _hideTimeOut: any;
  readonly statusSnackbar = StatusSnackbar;

  constructor(private readonly snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.initListener();
  }

  private initListener(): void {
    this.snackbarService.listener.subscribe((data) => {
      this.showSnackbar = data.show;
      this.status = data.status;
      this.message = data.message;
      if (data.show) {
        this.hideTimeOut = setTimeout(() => this.snackbarService.hide(), 1000);
      }
    });
  }

  hide(): void {
    clearTimeout(this.hideTimeOut);
    this.snackbarService.hide();
  }

  get hideTimeOut() {
    return this._hideTimeOut;
  }

  set hideTimeOut(timeOut: any) {
    this._hideTimeOut = timeOut;
  }

  get showSnackbar() {
    return this._showSnackbar;
  }

  set showSnackbar(value: boolean) {
    this._showSnackbar = value;
  }

  get message() {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get status() {
    return this._status;
  }

  set status(value: StatusSnackbar) {
    this._status = value;
  }
}
