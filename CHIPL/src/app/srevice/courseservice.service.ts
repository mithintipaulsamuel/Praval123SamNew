import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseserviceService {

  constructor() { }
  getCourse()
  {
    return [
      {
        c_id:101,
        c_name:'Java',
        Amount:30000
      },
      {
        c_id:102,
        c_name:'Html',
        Amount:5000
      },
      {
        c_id:103,
        c_name:'Css',
        Amount:5000
      },
      {
        c_id:104,
        c_name:'Angular',
        Amount:15000
      },
      {
        c_id:105,
        c_name:'Java-FullStack',
        Amount:45000
      },
      {
        c_id:106,
        c_name:'Python-FullStack',
        Amount:455000
      },
    ]
  }
}
