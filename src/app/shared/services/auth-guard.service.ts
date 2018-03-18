import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {CanActivate, Router} from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate() {
    return this.checkLogin();
  }

  private checkLogin() {
    if (this._authService.isLogged()) {
      return true;
    }

    this._router.navigate(['/login'])

    return false;
  }
}
