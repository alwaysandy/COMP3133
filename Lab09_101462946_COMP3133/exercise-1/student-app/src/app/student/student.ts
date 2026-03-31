import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  getCurrentDate() {
    const timestamp = Date.now();
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-GB');
  }
}
