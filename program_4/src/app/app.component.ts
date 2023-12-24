import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'program_4';

  inputNumber = '';
  factorialResult = '';
  squareResult = '';

  calculateFactorial() {
    const number = parseInt(this.inputNumber);
    if (Number.isInteger(number) && number >= 0) {
      let result = 1;
      for (let i = 2; i <= number; i++) {
        result *= i;
      }
      this.factorialResult = result.toString();
    } else {
      this.factorialResult = 'Invalid input';
    }
  }

  calculateSquare() {
    const number = parseFloat(this.inputNumber);
    if (!isNaN(number)) {
      this.squareResult = (number * number).toString();
    } else {
      this.squareResult = 'Invalid input';
    }
  }
}
