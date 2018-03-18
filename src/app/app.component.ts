import { Component } from '@angular/core';
import {DataService} from './shared/services/data.service';
import {Item} from './shared/list/list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public header = 'supershop';
  public footer = 'supershop';
  public date = Date.now();
}
