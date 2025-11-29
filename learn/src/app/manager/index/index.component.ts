import { Component, Input } from '@angular/core';
import { Manager } from '../manager';

@Component({
  selector: 'manager-index',
  standalone: true,
  imports: [],
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
