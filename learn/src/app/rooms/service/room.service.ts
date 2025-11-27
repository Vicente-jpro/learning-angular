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
    
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient) {

    console.log(this.config.apiEndpoint);

  }

  getRooms(): Observable<Room[]>{
    return this.http.get<Room[]>('/api/rooms')
  }

  save(room: Room): Observable<Room>{
    return this.http.post<Room>('/api/rooms', room)
  }

  update(room: Room): Observable<Room>{
    return this.http.put<Room>(`/api/rooms/${room.roomNumber}`, room)
  }

  delete(room: Room): Observable<Room>{
    return this.http.delete<Room>(`/api/rooms/${room.roomNumber}`)
  }

  
}
