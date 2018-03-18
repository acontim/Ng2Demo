import {Injectable} from '@angular/core';
import {Router} from '@angular/router';


@Injectable()
export class AuthService {
  private logged = false;

  constructor(private _router: Router) { }

  login() {
    this.logged = true;
    console.log(this.logged);
    this._router.navigate(['/products']);
  }

  logout() {
    this.logged = false;
    console.log(this.logged);
    this._router.navigate(['/login']);
  }

  isLogged() {
    return this.logged;
  }
}
