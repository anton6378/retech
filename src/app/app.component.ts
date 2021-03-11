import { Component, OnInit } from '@angular/core';
import { Item } from "./models/item";
import { DndDropEvent } from "ngx-drag-drop";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Test task';
  store: Item[] = [
    new Item(1, 'Товар 1', 'Описание товара какое тоОписание товара какое тоОписание товара какое то', '1.jpg', 0, 8, 200),
    new Item(2, 'Товар 2', 'Описание товара какое тоОписание товара какое тоОписание товара какое то', '2.jpg', 0, 8, 300),
    new Item(3, 'Товар 3', 'Описание товара какое тоОписание товара какое тоОписание товара какое то', '3.jpg', 0, 8, 100),
    new Item(4, 'Товар 4', 'Описание товара какое тоОписание товара какое тоОписание товара какое то', '4.jpg', 0, 8, 500),
    new Item(5, 'Товар 5', 'Описание товара какое тоОписание товара какое тоОписание товара какое то', '5.jpg', 0, 8, 200),
    new Item(6, 'Товар 6', 'Описание товара какое тоОписание товара какое тоОписание товара какое то', '6.jpg', 0, 8, 100),
    new Item(7, 'Товар 7', 'Описание товара какое тоОписание товара какое тоОписание товара какое то', '7.jpg', 0, 8, 250)
  ];
  cart: Item[] = [];

  ngOnInit(): void {
  }


  drop($event: DndDropEvent) {
    console.log($event);

    if (this.cart.findIndex(e => e.id == $event.data) == -1) {
      let item = this.store.find(e => e.id == $event.data);
      item.quantity = 1;
      this.cart.push(item);
    }
  }

  get total() {
    return this.cart.reduce((v, e) => v + e.quantity * e.price,0);
  }


  remove($event: number) {
    const idx = this.cart.findIndex(e => e.id == $event);
    this.cart.splice(idx,1);
  }
}
