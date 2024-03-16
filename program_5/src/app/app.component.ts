import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'program_5';

  student_list: any = [
    {
      name: 'Student_1',
      semester_1: 8.1,
      semester_2: 8.2,
      semester_3: 8.3,
      semester_4: 8.4,
      semester_5: 8.5,
      semester_6: 8.6,
      semester_7: 8.7,
      semester_8: 8.8,
    },
    {
      name: 'Student_2',
      semester_1: 9.1,
      semester_2: 9.2,
      semester_3: 9.3,
      semester_4: 9.4,
      semester_5: 9.5,
      semester_6: 9.6,
      semester_7: 9.7,
      semester_8: 9.8,
    },
    {
      name: 'Student_3',
      semester_1: 7.7,
      semester_2: 7.8,
      semester_3: 7.9,
      semester_4: 8.7,
      semester_5: 8.8,
      semester_6: 8.9,
      semester_7: 9.1,
      semester_8: 9.2,
    },
  ];

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
