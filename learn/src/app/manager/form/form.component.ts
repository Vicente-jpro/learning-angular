import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Manager } from '../manager';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'manager-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html'
})
export class FormComponent {
    @Input() title = ''
    @Input() manager!: Manager;

    @Output() managerEvent = new EventEmitter<Manager>
    onSubtimit(){

      this.managerEvent.emit(this.manager)
      console.log(this.manager)
    }
}
