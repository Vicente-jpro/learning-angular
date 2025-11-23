import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from '../../db-data';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    FormsModule, 
    CourseCardComponent,
    RoomsComponent
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  course1 = COURSES[0];
  
  course2 = COURSES[1];
  
  course3 = COURSES[2];

  showAlert() {
    alert('Button clicked!');
  }
}
