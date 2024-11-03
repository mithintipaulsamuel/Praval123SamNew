import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseserviceService } from 'src/app/srevice/courseservice.service';

@Component({
  selector: 'app-selected-course',
  templateUrl: './selected-course.component.html',
  styleUrls: ['./selected-course.component.css']
})
export class SelectedCourseComponent {
  // router: any;
  c_id:Number;
  constructor(private _cou:CourseserviceService,private _activatedroute:ActivatedRoute)
  {

  }
  courseId=0;
  // private _router: any;
  // private _activatedroute: any;
  
  ngOnInit(){
    this.c_id=(parseInt)(this._activatedroute.snapshot.paramMap.get("id"));
  }

}
