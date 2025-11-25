import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../Room';


@Component({
  selector: 'room-list',
  standalone: true,
  imports: [],
  templateUrl: './room-list.component.html'
})
export class RoomListComponent {

  @Input()
  rooms: Array<Room> = new Array<Room>();

  room: Room = new Room(0, '', 0) 

  @Output()
  selectRoomEvent = new EventEmitter<Room>;

  roomSelectedEvent(room: Room): void{
    this.room = room
    this.selectRoomEvent.emit(this.room)
    console.log(this.room)
  }

}
