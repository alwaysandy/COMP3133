import { Component, signal } from '@angular/core';
import { StudentsComponent } from './students.component';

@Component({
  selector: 'app-root',
  imports: [StudentsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
