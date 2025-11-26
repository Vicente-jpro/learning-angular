import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from './localstorage.token';

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
export class AppComponent implements OnInit {

  constructor(@Inject(localStorageToken) private storageToken: Storage ){}

  ngOnInit(): void {
      this.storageToken.setItem('name', 'Vicente Simao token')
  }
  
}
