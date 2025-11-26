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

     this.roomService
    .getRooms()
    .subscribe({
      next: response => {
        console.log(response)
        this.rooms = response
      }
    })
  }

  roomSelectedToAdd(room: Room){
    //console.log(room)
    
      this.roomService
        .save(room)
        .subscribe({
          next: response =>  this.rooms = [...this.rooms, room],
          error: response => console.log( response.errors)
        })
  }

  update(room: Room){
    this.roomService
      .update(room)
      .subscribe({
        next: response => {
          this.rooms = [...this.rooms, room]
        },
        error: response => console.log(response.errors)
      })
  }

  delete(room: Room){
    this.roomService
      .delete(room)
      .subscribe({
        next: response => {
            console.log('Room deleted successfully');
            this.rooms = this.rooms.filter(r => r.roomNumber !== room.roomNumber);
        },
        error: response => {
          console.log('Error deleting room:', response)
        }
      })
  }

}
