import { Component, Input } from '@angular/core';
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
  
    ngOnInit(): void {
        
    }
    delete(manager: Manager){
  
    }
  
    edit(manager: Manager){
  
    }

}
