import { Component } from '@angular/core';
import {DataService} from './shared/data.service';
import {Item} from './shared/list/list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public header = 'supershop';
  public items: Array<Item>;

  constructor (private _dataService: DataService) {
  }

  generateList() {
    this.items = this._dataService.getItems();
  }

  reverseList() {
    this.items.reverse();
  }
}
