import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'program_4';

  input_number:any = '';
  factorial_result:any = '';
  square_result:any = '';

  calculateFactorial() {
    const number = parseInt(this.input_number);
    if (Number.isInteger(number) && number >= 0) {
      let result = 1;
      for (let i = 2; i <= number; i++) {
        result *= i;
      }
      this.factorial_result = result.toString();
    } else {
      this.factorial_result = 'Invalid input';
    }
  }

  calculateSquare() {
    const number = parseFloat(this.input_number);
    if (!isNaN(number)) {
      this.square_result = (number * number).toString();
    } else {
      this.square_result = 'Invalid input';
    }
  }
}
