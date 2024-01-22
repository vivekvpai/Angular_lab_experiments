import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'program_10';

  item_to_add: any = { name: '', quantity: '', price: '' };

  shopping_list: any = [
    { name: 'Item 1', quantity: 1, price: 100 },
    { name: 'Item 2', quantity: 2, price: 200 },
    { name: 'Item 3', quantity: 3, price: 300 },
  ];

  is_edit: boolean = false;

  add() {
    console.log(this.item_to_add);
    this.shopping_list.unshift(this.item_to_add);
  }

  remove(index: any) {
    this.shopping_list.splice(index, 1);
  }

  edit(index: any) {
    this.is_edit = true;
  }
}
