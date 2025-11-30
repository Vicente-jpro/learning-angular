import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { Manager } from '../manager';
import { ManagerService } from '../service/manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'manager-edit',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit{

  title: string  = 'Editar Manager'

  managerSaved!: Manager

  constructor(private service: ManagerService, private router: Router){ 

  }

  ngOnInit(): void {

  }

  edit(manager: Manager){
    
  }
  findById(id: string){
    return this.service
            .findById(id)
            .subscribe({
              next: response => this.managerSaved = response,
              error: response => console.log("Manager was not found.")
            })
  }

  update(manager: Manager){
    this.service 
        .update(manager, manager.id )
        .subscribe({
          next: response => this.router.navigate(['/managers']),
          error: rsponse => console.log("Error on update manager")
        })

  }
}
