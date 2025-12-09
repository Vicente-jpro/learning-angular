import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './employee.component.html',
  //providers: [RoomService]
})
export class EmployeeComponent {

  private formBuilder = inject(FormBuilder);
   
  profileForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
      
      aliases: this.formBuilder.array([this.formBuilder.control('')]),
    });

addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  onSubmit(){
    
    console.log(this.profileForm.value);
    // { firstName: 'Nancy', lastName: 'Drew' }
  }
  updateName(){
    // This is how we are going to update the value that cam from backend
 
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  
  }

}
