import { Component } from '@angular/core';
import { App1Service } from 'src/app/services/app1.service';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component 
{

  data:any;
  store:any;
  constructor (private _appService:App1Service){}
  onClick()
  {
    console.log("Hello");
    this._appService.GetData().subscribe(
      (resp)=>{
        console.log(resp);
        this.data=resp;
      }
    )
  }

    
}
