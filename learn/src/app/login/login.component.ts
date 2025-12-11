import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  
  private formBuilder = inject(FormBuilder); 

  loginForm = this.formBuilder.group({
    email: [''],
    password: ['']
  });

  constructor(private service: LoginService, private route: Router) { }



  onSubmit(): void {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    

    let isLogin = this.service.login(email!, password!);

    console.log(email, password, isLogin);
    if (isLogin) {
       console.log(email, password, isLogin);
      this.route.navigate(['/managers']);
    }
  }
  


  logout(): void {
    this.service.logout();
    console.log('Logged out successfully');
  }

}
