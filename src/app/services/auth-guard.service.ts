import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _storageSvc: StorageService, public _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    console.log(this._storageSvc.getIsLoggedIn() && route.routeConfig.path === 'login');

    // if (this._storageSvc.getIsLoggedIn() && route.routeConfig.path === 'login') {
    //   this._router.navigate(['libraries']);
    //   return false;
    // } else 
    if (!this._storageSvc.getIsLoggedIn()) {
      this._router.navigate(['login']);
      return false;
    }
    return true;
  }
}
