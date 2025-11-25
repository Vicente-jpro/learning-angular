import { Component } from '@angular/core';
import { RoomService } from '../rooms/service/room.service';

@Component({
  selector: 'employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  //providers: [RoomService]
})
export class EmployeeComponent {

  constructor(private roomService: RoomService){

  }
}
