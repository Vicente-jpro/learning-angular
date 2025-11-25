import { Component, Input, OnInit } from '@angular/core';

import { RoomListComponent } from './room-list/room-list.component';
import { Room } from './Room';
import { RoomService } from './service/room.service';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'rooms',
  standalone: true,
  imports: [RoomListComponent, EmployeeComponent],
  templateUrl: './rooms.component.html',
})
export class RoomsComponent implements OnInit{

  rooms: Array<Room> = new Array<Room>();

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {

    this.rooms = this.roomService.getRooms()
  }

  roomSelected(room: Room){
    //console.log(room)
    
      this.rooms = [...this.rooms, room]
  }

}
