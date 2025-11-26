import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../Room';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'room-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './room-list.component.html'
})
export class RoomListComponent {

  @Input()
  rooms: Array<Room> = new Array<Room>();

  room!: Room;

  @Output()
  selectRoomEvent = new EventEmitter<Room>;

  @Output() deleteEvent= new EventEmitter<Room>

  roomSelectedEvent(room: Room): void{
    this.room = room
    this.selectRoomEvent.emit(this.room)
    console.log(this.room)
  }

  delete(room: Room){
    this.room = room
    this.deleteEvent.emit(this.room)
  }

}
