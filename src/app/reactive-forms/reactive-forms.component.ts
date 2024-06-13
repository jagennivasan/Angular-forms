import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
contactForms= new FormGroup({
  firstName: new FormControl("john"),
  lastName:new FormControl("wick"),
  email: new FormControl("john@112"),
  gender: new FormControl("male"),
  isMarried: new FormControl(true),
  country: new FormControl("2"),
  address:new FormGroup({
    city: new FormControl("lkj"),
    street: new FormControl("jerlkjf"),
    pincode:new FormControl("123")
  })

  
})
onSubmit(){
  console.log(this.contactForms.value);
  
}
}
