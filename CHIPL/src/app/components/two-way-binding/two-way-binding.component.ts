import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  value;
  userName;//if we assign value for a property then we will see it in the output Screen 
  newvar="Ex :- Mallela Sundeep";
  sendClick(data)
  {
    this.value=data.value;
  }
}
