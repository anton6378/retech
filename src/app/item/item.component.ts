import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { Item } from "../models/item";

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @HostBinding('class.shadow-sm') shadow: boolean = true;
  @Input() item: Item;

  @Output() onRemove = new EventEmitter<number>();

  ngOnInit(): void {
  }

  plus() {
    this.item.plus();
  }

  minus() {
    this.item.minus();

    if (this.item.quantity == 0) {
      this.onRemove.emit(this.item.id);
    }

  }

}
