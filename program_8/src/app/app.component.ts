import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'program_8';

  form: FormGroup = new FormGroup({});

  user_name: any = '';
  password: any = '';

  alert: boolean = false;

  constructor() {
    this.form = new FormGroup({
      user_name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  error: any = '';

  submit() {
    if (this.form.invalid) {
      console.log('ERROR');
      this.alert = true;
      this.user_name = '';
      this.password = '';
      this.error = 'Enter User name and password';
    } else if (
      this.form.value.user_name !== 'Admin' &&
      this.form.value.password !== 'admin'
    ) {
      this.alert = true;
      this.error = 'Invalid User name and password';
    } else {
      this.alert = true;
      this.error = 'Login successful';

      console.log(this.form.value);
      this.user_name = this.form.value.user_name;
      this.password = this.form.value.password;
    }
  }
}
