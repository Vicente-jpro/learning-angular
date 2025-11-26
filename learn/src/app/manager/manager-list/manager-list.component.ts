import { Component, Input, OnInit, Output, output } from '@angular/core';
import { Manager } from '../manager';

@Component({
  selector: 'manager-list',
  standalone: true,
  imports: [],
  templateUrl: './manager-list.component.html',
})
export class ManagerListComponent implements OnInit{

  @Input() managersList: Manager[] = []

  ngOnInit(): void {
      
  }
  delete(manager: Manager){

  }

  edit(manager: Manager){

  }

}
