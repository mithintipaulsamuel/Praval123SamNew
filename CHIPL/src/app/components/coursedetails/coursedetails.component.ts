import { Component } from '@angular/core';
import { CourseserviceService } from 'src/app/srevice/courseservice.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent {
  constructor(private _cor:CourseserviceService){}

  public emp=this._cor.getCourse();
  
  // public emp=[
  //   {
  //     c_id:101,
  //     c_name:'Java',
  //     Amount:30000
  //   },
  //   {
  //     c_id:102,
  //     c_name:'Html',
  //     Amount:5000
  //   },
  //   {
  //     c_id:103,
  //     c_name:'Css',
  //     Amount:5000
  //   },
  //   {
  //     c_id:104,
  //     c_name:'Angular',
  //     Amount:15000
  //   },
  //   {
  //     c_id:105,
  //     c_name:'Java-FullStack',
  //     Amount:45000
  //   }
  // ]
}
