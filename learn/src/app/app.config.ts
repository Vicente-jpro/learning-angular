import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { APP_SERVICE_CONFIG, APP_CONFIG } from './configs/appconfig.service';
import { requestInterceptor } from './request.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(withInterceptors([requestInterceptor])),
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG
    },
  ]
};
