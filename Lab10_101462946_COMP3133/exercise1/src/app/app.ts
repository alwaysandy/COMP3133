import { Component, signal } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly env = signal(environment.env);
}
