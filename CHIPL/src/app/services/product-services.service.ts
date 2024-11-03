import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  private _url="https://dummyjson.com/products/";
  
  constructor(private _http:HttpClient) { }

  DeleteData(pid):Observable<any>
  {
   return  this._http.delete(this._url+pid);
  }
}
