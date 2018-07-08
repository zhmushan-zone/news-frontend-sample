import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  private _isShow = false;
  set isShow(bool: boolean) { this._isShow = bool; }
  get isShow() { return this._isShow; }

  constructor() { }
}
