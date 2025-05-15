import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { P1Component } from './p1/p1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,P1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ThirdTestPractice';
}
