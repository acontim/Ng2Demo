import {Injectable} from '@angular/core';
import {Item} from './list/list.model';

@Injectable()
export class DataService {

  private items: Array<Item> = [
    {
      id: 1,
      description: 'Grog'
    },
    {
      id: 2,
      description: 'Tomacco'
    },
    {
      id: 3,
      description: 'Szechuan sauce'
    }
  ];

  getItems(): Array<Item> {
    return this.items;
  }

  addItem(item: Item): void {
    this.items.push(item);
  }
}
