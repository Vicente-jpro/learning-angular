import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    RouterLink,
    FormsModule
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
