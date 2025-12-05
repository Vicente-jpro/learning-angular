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

  managerSaved: Manager = new Manager('','', '', '')

  constructor(private service: ManagerService, private router: Router){ 

  }

  ngOnInit(): void {

    this.findById("1")

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
