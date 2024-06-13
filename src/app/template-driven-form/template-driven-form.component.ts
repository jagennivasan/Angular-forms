import { NgFor, } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent implements OnInit {
  countryList: Country[] = [
    new Country('1', 'India'),
    new Country('2', 'USA'),
    new Country('3', 'Russia'),

  ];
  contact!:Contact
  ngOnInit(): void {
    this.contact={
      firstName:"john",
      lastName:"wick",
      email:"johnwick@123",
      gender:"male",
      isMarried:false,
      country:"2",
      address:{city:"New York",street:"little-Russia",pincode:"434"}
      
    }
  }
  onSubmit(form:NgForm){
    console.log(form.value)
    console.log(form.touched);
    
  }

}

class Country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

class Contact{
firstName!:string;
lastName!:string;
email!:string;
gender!:string;
isMarried!:boolean;
country!:string;
address!:{
  city:string;
  street:string;
  pincode:string;
}
}