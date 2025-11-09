import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  data = {
    name: 'Vicente asfd',
    course: 'Angular'
  }

  showAlert() {
    alert('Button clicked!');
  }
}
