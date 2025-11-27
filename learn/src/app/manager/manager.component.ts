import { Component, OnInit } from '@angular/core';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { Manager } from './manager';
import { ManagerService } from './service/manager.service';

@Component({
  selector: 'manager',
  standalone: true,
  imports: [ManagerListComponent],
  templateUrl: './manager.component.html',
})
export class ManagerComponent implements OnInit{

  managers: Manager[] = []

  constructor(private service: ManagerService){}

  ngOnInit(): void {
         this.service
        .getManagers()
        .subscribe({
          next: response =>{
            console.log(response)
            this.managers = response
          } 
        })
  }

}
