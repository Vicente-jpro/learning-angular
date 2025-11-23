import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit{

   hotelName: string = "Vicente Hotel"

  numberOfRooms: number = 34

  hideRooms = false
  hideRoomsActionName = "Hide Rooms"

  ngOnInit(): void {
    
  }

  changeRoomVisibility(){
    this.hideRooms = !this.hideRooms
    this.hideRoomsActionName = this.hideRooms ? "Hide Rooms" : "Show Rooms"  
    console.log(this.hideRooms)
  }


}
