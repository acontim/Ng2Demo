import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from './list.model';

@Component({
  selector: 'common-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() itemList: Array<Item>;
  @Output() reverseList: EventEmitter<void> = new EventEmitter<void>();
  @Output() clickRow:  EventEmitter<number> = new EventEmitter<number>();
  emitEvent() {
    this.reverseList.emit();
  }

  click(item: Item){
    this.clickRow.emit(item.id);
  }
}
