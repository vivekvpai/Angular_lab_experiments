import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'program_3';

  number_1: number = 0;
  number_2: number = 0;
  result: number = 0;

  get_result(operation: string) {
    switch (operation) {
      case 'add':
        this.result = this.number_1 + this.number_2;
        break;
      case 'sub':
        this.result = this.number_1 - this.number_2;
        break;
      case 'multiply':
        this.result = this.number_1 * this.number_2;
        break;
      case 'divide':
        this.result = this.number_1 / this.number_2;
        break;

      default:
        this.result = 0;
        break;
    }
  }
}
