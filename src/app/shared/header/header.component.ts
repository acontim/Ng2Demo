import {Component, Input} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() header: string;

  constructor(private _authService: AuthService, private _router: Router) { }

  logout() {
    this._authService.logout();
  }

  isLogged() {
    return this._authService.isLogged();
  }

  toProducts() {
    this._router.navigate(['/products']);
  }

  toShops() {
    this._router.navigate(['/shops']);
  }
}
