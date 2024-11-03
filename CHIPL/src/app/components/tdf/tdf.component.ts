import { Component } from '@angular/core';
import { User } from 'src/app/ClassFolder/user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {
submitDataForm(formdata)
 {
  console.log(formdata.value);
  //need to implement api implementation.
 }

user =new User("Coding Hub","Codinghub@gmail.com",7993496255,"Male","Java",true);
}
