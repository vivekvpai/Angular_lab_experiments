import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'program_9';
  search: any = '';

  employee_list: any = [
    {
      name: 'Employee 1',
      salary: 1000,
    },
    {
      name: 'Employee 2',
      salary: 1500,
    },
    {
      name: 'Employee 3',
      salary: 3000,
    },
  ];
}
