import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  //selector: '.app-home',//as class
    selector: '#app-home',//as class
  // selector:'app-home' as an element 
  // selector:'[app-home]',//as attribute
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  link="/coursedetails";
  
 ngOnInit(){

  
  

  

     let o=new Observable(
      (response)=>{
        console.log("This is Observable");
        response.next("This is server response1");
        response.next("This is server response2");
        response.next("This is server response3");
        response.error(" This is server error");
        response.complete();
        response.next("This is server response4");
      }
     );

     o.subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{
        console.log(err);
      },
      ()=>{
        console.log("Server Completed");

      }
     );
 }

}
