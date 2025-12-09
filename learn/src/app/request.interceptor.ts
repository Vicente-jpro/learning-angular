import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { localStorageToken } from './localstorage.token';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorage = inject(localStorageToken);
  
  // Get the token from localStorage
  const token = localStorage.getItem('token');
  
  // Clone the request and add authorization header if token exists
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  
  return next(req);
};
