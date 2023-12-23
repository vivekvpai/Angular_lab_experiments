import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'program_1';

  form: FormGroup = new FormGroup({});

  first_name: any = '';
  last_name: any = '';

  alert: boolean = false;

  constructor() {
    this.form = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    if (this.form.invalid) {
      console.log('ERROR');
      this.alert = true;
      this.first_name = '';
      this.last_name = '';
    } else {
      console.log(this.form.value);
      this.first_name = this.form.value.first_name;
      this.last_name = this.form.value.last_name;
    }
  }
}
