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
  public items: Array<Item>;
  private reverse = false;

  constructor (private _dataService: DataService) {
  }

  generateList() {
    if (this.reverse) {
      this.items.reverse();
      this.reverse = false;
    }
  }

  reverseList() {
    this.reverse = !this.reverse;
    this.items.reverse();
  }
}
