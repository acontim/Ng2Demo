import { Component } from '@angular/core';
import {DataService} from './shared/data.service';
import {Item} from './shared/list/list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public items: Array<Item>;

  constructor (private _dataService: DataService) {
    this.items = _dataService.getItems();
  }
}
