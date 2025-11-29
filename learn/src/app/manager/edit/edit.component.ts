import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'manager-edit',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './edit.component.html',
})
export class EditComponent{

  title: string  = 'Editar Manager'
}
