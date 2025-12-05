import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Manager } from '../manager';
import { Router, RouterLink } from "@angular/router";
import { ManagerService } from '../service/manager.service';

@Component({
  selector: 'manager-index',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './index.component.html'
})
export class IndexComponent {

    @Input() managerList: Manager[] = []
    
    @Input() managerSaved: Manager = new Manager('','', '', '')

    manager: Manager = new Manager('','', '', '')

    constructor(private service: ManagerService, private router: Router){}

    ngOnInit(): void {
        
    }
    delete(manager: Manager){
      
    }
  
   edit(manager: Manager){
     this.router.navigate(['managers/', manager.id])
  }
  
}
