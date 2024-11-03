import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  
name:String ="Coding hub";
getMyName()
{
  return this.name//"Mithinti Paul Samuel";
}
emp = {
  stdname:"Samuel",
  age:30,
  fname:"Mithinti",
  lname:null
}
data =[
  {name:"Samuel",gender:"Male",Age:24},{name:"Srinivas",gender:"Male",Age:27},{name:"Sudha",gender:"Female",Age:25}
]

imgUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/53/6d/1e/voyage-torba.jpg?w=700&h=-1&s=1";
newImg="../../../assets/img/IMG_20231122_133326.jpg";
newname:String="Mithinti Paul Samuel";
}
