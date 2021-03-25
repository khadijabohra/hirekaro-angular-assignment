import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class RedirectGuardService implements CanActivate {

  constructor(private _storageSvc: StorageService, public _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    if (this._storageSvc.getIsLoggedIn()) {
      this._router.navigate(['libraries']);
      return false;
    }
    return true;
  }
}
