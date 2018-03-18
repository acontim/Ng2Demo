import {Injectable} from '@angular/core';


@Injectable()
export class AuthService {
  private logged = false;

  login() {
    this.logged = true;
  }

  logout() {
    this.logged = false;
  }

  isLogged() {
    return this.logged;
  }
}
