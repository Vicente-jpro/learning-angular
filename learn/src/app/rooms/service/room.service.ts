import { Injectable } from '@angular/core';
import { Room } from '../Room';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

   rooms: Array<Room> = new Array<Room>();

    
  constructor() { 
    console.log(environment.apiEndpoint);
    this.rooms.push(
      new Room(1,'Swite', 3),
      new Room(2,'Solteiro', 1),
      new Room(3,'Casal', 2)
    )
  }

  getRooms(): Room[]{
    
    return this.rooms;
  }

}
