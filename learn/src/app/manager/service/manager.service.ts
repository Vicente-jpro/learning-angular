import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from '../../configs/appconfig.service';
import { AppConfig } from '../../configs/appconfig.interface';
import { HttpClient } from '@angular/common/http';
import { Room } from '../../rooms/Room';
import { Observable } from 'rxjs';
import { Manager } from '../manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient) {

    console.log(this.config.apiEndpoint);

  }

  getManagers(): Observable<Manager[]>{
    return this.http.get<Manager[]>('/api/managers')
  }
}
