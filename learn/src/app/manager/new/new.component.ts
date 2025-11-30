import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { Manager } from '../manager';
import { ManagerService } from '../service/manager.service';

@Component({
  selector: 'manager-new',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './new.component.html'
})
export class NewComponent {

  title: string  = 'Adicionar um novo Manager'

  manager: Manager = new Manager('','', '', '')

  constructor(private service: ManagerService){ }

  submit(manager: Manager){

    this.service
        .save(manager)
        .subscribe({
          next: response => this.manager = response,
          error: response => console.log(response)
        })
    console.log("manager submited.")
  }

  update(manager: Manager){

  }
}
