import {Component, Input} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() header: string;

  constructor(private _authService: AuthService) { }

  logout() {
    this._authService.logout();
  }

  isLogged() {
    return this._authService.isLogged();
  }
}
