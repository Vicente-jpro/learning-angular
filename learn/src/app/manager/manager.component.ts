import { Component, OnInit } from '@angular/core';
import { Manager } from './manager';
import { ManagerService } from './service/manager.service';
import { IndexComponent } from './index/index.component';

@Component({
  selector: 'manager',
  standalone: true,
  imports: [IndexComponent],
  templateUrl: './manager.component.html'
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
