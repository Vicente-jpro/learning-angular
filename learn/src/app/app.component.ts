import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { COURSES } from '../../db-data';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    FormsModule, 
    RoomsComponent
  ],
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {


}
