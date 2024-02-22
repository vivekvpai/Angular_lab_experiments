import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'program_7';

  item_to_add: any = {
    index: 0,
    to_do: '',
  };

  to_do_list: any = [
    { index: 0, user: 'abc@email.com' },
    { index: 1, user: 'xyz@email.com' },
  ];

  is_edit: boolean = false;

  add() {
    this.item_to_add.index = this.to_do_list.length;
    this.to_do_list.push(this.item_to_add);
  }

  remove(index: any) {
    this.to_do_list.splice(index, 1);
  }

  edit(index: any) {
    this.is_edit = true;
  }
}

