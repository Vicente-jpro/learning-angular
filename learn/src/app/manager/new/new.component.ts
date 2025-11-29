import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { Manager } from '../manager';

@Component({
  selector: 'manager-new',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './new.component.html'
})
export class NewComponent {

  title: string  = 'Adicionar um novo Manager'

  manager!: Manager

  submit(manager: Manager){
    console.log("manager submited.")
  }
}
