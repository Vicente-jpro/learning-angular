import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Manager } from '../manager';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'manager-index',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './index.component.html'
})
export class IndexComponent {

  
    @Input() managerList: Manager[] = []

    manager: Manager = new Manager(0,'', '', '')

  
    ngOnInit(): void {
        
    }
    delete(manager: Manager){
      
    }
  
    edit(manager: Manager){
      
    }

}
