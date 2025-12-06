import { Component, computed, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { Manager } from '../manager';
import { ManagerService } from '../service/manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map} from 'rxjs/operators';

@Component({
  selector: 'manager-edit',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit{

  title: string  = 'Editar Manager'
  id: number = 0
  managerSaved: Manager = new Manager('','', '', '')

  constructor(
    private url: ActivatedRoute,
    private service: ManagerService, 
    private router: Router){ 

  }
   

  ngOnInit(): void {

 
    //const id = this.url.snapshot.paramMap.get('id');
    this.url.paramMap.pipe(
      map(params => params.get('id'))
    ).subscribe(id => {
      if(id) {
        this.findById(id);
      }
    });

  }

  findById(id: string){
    return this.service
            .findById(id)
            .subscribe({
              next: response => this.managerSaved = response,
              error: response => console.log("Manager was not found.")
            })
  }

  submit(manager: Manager){
    this.update(manager)
  }
  update(manager: Manager){
    this.service
        .update(manager, manager.id)
        .subscribe({
          next: response => this.router.navigate(['/managers']),
          error: response => console.log(response)
        })
  }


}
