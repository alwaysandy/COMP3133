import { Component } from "@angular/core";
import { Student } from './student/student';

@Component({
  selector: 'students',
  imports: [Student],
  template: '<h2>{{getTitle()}} <app-student></app-student></h2>',
})
export class StudentsComponent {
  title = 'My List Of Students';

  getTitle() {
    return this.title;
  }
}
