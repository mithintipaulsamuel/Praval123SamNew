import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})

 export class ReactFormComponent {
sendData() {
  console.log(this.registrationForm.value);
}

  //this is the basic way
  registrationForm=new FormGroup({
    "userName": new FormControl('Samuel',[Validators.required,Validators.minLength(10)]),
    "password": new FormControl(),
    "confirmPassword": new FormControl(),
    "city": new FormControl(),
    "state": new FormControl(),
    "pincode": new FormControl(),
  })

  //this is the easy way
  // registrationForm =this._formBuilder.group({
  //       "userName": new FormControl('Samuel',[Validators.required,Validators.minLength(10)]),
  //       "password": [],
  //       "confirmPassword": [],
  //       "city":[],
  //       "state": [],
  //       "pincode":[],
  // })


  
 
}
