import { CanActivateFn } from '@angular/router';
import { LoginService } from '../login/login.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
 
  let service = inject(LoginService);
  
 return service.isLoggedIn;
};
