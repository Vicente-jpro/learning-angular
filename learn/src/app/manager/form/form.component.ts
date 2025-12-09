import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Manager } from '../manager';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'manager-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html'
})
export class FormComponent {
    @Input() title = ''
    @Input() manager: Manager = { id: '', name: '', email: '', department: '' };
    @Input() buttonSubmit = ''
    
    @Output() managerEvent = new EventEmitter<Manager>

    form;

    constructor( private fb: FormBuilder ){
      this.form = this.fb.group({
        name: [this.manager.name, [Validators.required, Validators.minLength(5), Validators.maxLength(90)]],
        email: [this.manager.email, [Validators.required, Validators.email]],
        department: [this.manager.department, [Validators.required]]
      });
    }
    onSubtimit(){
      this.managerEvent.emit(this.manager)
      
      if (this.form.invalid) {
        
        console.log('Is invalid',this.form.markAllAsTouched());
      }


      console.log(this.manager)
    }
}
