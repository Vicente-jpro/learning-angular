import { inject, Injectable } from '@angular/core';
import { FormBuilder} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;

  login(email: string, password: string): void | boolean {
    if(email === 'vicente.simao.rails@gmail.com' && password === '1234'){
      this.isLoggedIn = true;

    return this.isLoggedIn;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
