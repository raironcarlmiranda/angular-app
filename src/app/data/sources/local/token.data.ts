import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenData {
  private _accessToken: string | null = null;
  private _refreshToken: string | null = null;
  private _rememberMe = false;

  constructor() {
    this.loadFromStorage();
  }

  get access_token(): string | null {
    return this._accessToken;
  }

  get refresh_token(): string | null {
    return this._refreshToken;
  }

  get remember_me(): boolean {
    return this._rememberMe;
  }

  private loadFromStorage(): void {
    const remembered = localStorage.getItem('remember_me') === 'true';
    const storage = remembered ? localStorage : sessionStorage;
    this._accessToken = storage.getItem('access_token');
    this._refreshToken = storage.getItem('refresh_token');
    this._rememberMe = remembered;
  }

  setTokens(access: string, refresh: string, remember: boolean): void {
    this._accessToken = access;
    this._refreshToken = refresh;
    this._rememberMe = remember;

    const storage = remember ? localStorage : sessionStorage;
    storage.setItem('access_token', access);
    storage.setItem('refresh_token', refresh);
    storage.setItem('remember_me', remember.toString());

    const other = remember ? sessionStorage : localStorage;
    other.removeItem('access_token');
    other.removeItem('refresh_token');
    other.removeItem('remember_me');
  }

  clearTokens(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('remember_me');
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');
    sessionStorage.removeItem('remember_me');

    this._accessToken = null;
    this._refreshToken = null;
    this._rememberMe = false;
  }
}
