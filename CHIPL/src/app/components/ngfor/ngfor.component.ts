import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {

  //public ar=['Sam','Mam','Pam','Dam'];
  
  public emp=[
    {
      id:1,
      name:'Sam',
      age:30
    },
    {
      id:2,
      name:'Mam',
      age:25
    },
    {
      id:3,
      name:'Pam',
      age:40
    },
    {
      id:4,
      name:'Dam',
      age:35
    }
  ]
  
}
