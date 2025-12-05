import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { Manager } from '../manager';
import { ManagerService } from '../service/manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'manager-new',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './new.component.html'
})
export class NewComponent {

  title: string  = 'Adicionar um novo Manager'

  manager: Manager = new Manager('','', '', '')

  constructor(private service: ManagerService, private router: Router){ }


  submit(manager: Manager){
      this.save(manager)
  }

  save(manager: Manager){
    this.service
      .save(manager)
      .subscribe({
        next: response => this.router.navigate(['/managers']),
        error: response => console.log(response)
      })
  }

}
