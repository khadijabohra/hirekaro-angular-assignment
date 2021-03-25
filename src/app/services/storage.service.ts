import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocialUser } from '../data-models/data-models';


const KEYS = {
  TOKEN_KEY: 'AuthToken', ISLOGGEDIN: 'isLoggedIn',
  USERAME: 'Username'
};

@Injectable()
export class StorageService {
  constructor(private _router: Router) { }

  signOut() {
    window.localStorage.removeItem(KEYS.TOKEN_KEY);
    window.localStorage.removeItem(KEYS.ISLOGGEDIN);
    window.localStorage.clear();
  }

  signOutWithLoginRedirect() {
    this.signOut();
    setTimeout(() => this._router.navigate(['login']), 500);
  }

  public saveToken(token: string) {
    window.localStorage.removeItem(KEYS.TOKEN_KEY);
    window.localStorage.removeItem(KEYS.ISLOGGEDIN);
    window.localStorage.setItem(KEYS.TOKEN_KEY, token);
    window.localStorage.setItem(KEYS.ISLOGGEDIN, 'TRUE');
  }

  updateUsername(obj: SocialUser) {
    window.localStorage.setItem(KEYS.USERAME, obj.name);
  }

  getUsername() {
    return window.localStorage.getItem(KEYS.USERAME);
  }


  public getToken(): string {
    return window.localStorage.getItem(KEYS.TOKEN_KEY);
  }

  public getLoggedInFlagFromStorage(): string {
    return window.localStorage.getItem(KEYS.ISLOGGEDIN);
  }
  public getIsLoggedIn() {
    return (this.getLoggedInFlagFromStorage() === 'TRUE');
  }
  get isUserLoggedIn() {
    return window.localStorage.getItem(KEYS.ISLOGGEDIN);
  }
}
