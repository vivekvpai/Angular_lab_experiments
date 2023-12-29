import { Component } from '@angular/core';
import { student_data } from './helpers/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'program_5';

  student_list: any = student_data;

  get_cgpa(item: any) {
    let result =
      (item.semester_1 +
        item.semester_2 +
        item.semester_3 +
        item.semester_4 +
        item.semester_5 +
        item.semester_6 +
        item.semester_7 +
        item.semester_8) /
      8;
    return result;
  }
}
