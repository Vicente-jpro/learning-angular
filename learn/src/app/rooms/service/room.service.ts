import { Inject, Injectable } from '@angular/core';
import { Room } from '../Room';
import { APP_SERVICE_CONFIG } from '../../configs/appconfig.service';
import { AppConfig } from '../../configs/appconfig.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

   rooms: Array<Room> = new Array<Room>();

    
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient) {

    console.log(this.config.apiEndpoint);

  }

  getRooms(): Observable<Room[]>{
    return this.http.get<Room[]>('/api/rooms');
  }

}
