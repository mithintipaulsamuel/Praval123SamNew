import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseserviceService } from 'src/app/srevice/courseservice.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
 
  constructor(private _cou:CourseserviceService,private _router:Router)
  {

  }
  public emp=this._cou.getCourse();
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
 selecteddata(id)
 {
  alert(id);
  this._router.navigate(['/selectedcourse',id])
 }
}
