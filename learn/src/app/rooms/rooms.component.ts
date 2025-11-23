import { Component, Input, OnInit } from '@angular/core';
import { Room } from './room';
import { RoomListComponent } from './room-list/room-list.component';

@Component({
  selector: 'rooms',
  standalone: true,
  imports: [RoomListComponent],
  templateUrl: './rooms.component.html',
})
export class RoomsComponent implements OnInit{

  rooms: Array<Room> = new Array<Room>();

  ngOnInit(): void {
    
    this.rooms.push(
      new Room(1,'Swite', 3),
      new Room(2,'Solteiro', 1),
      new Room(3,'Casal', 2)
    )
  }

  roomSelected(room: Room){
    console.log(room)
  }

}
