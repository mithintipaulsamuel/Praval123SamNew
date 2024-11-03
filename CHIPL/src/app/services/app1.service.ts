import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class App1Service {

  private _url= "http://localhost:8080/app1";
  
  constructor(private _http:HttpClient) { }

  GetData():Observable<any>
  {
  return this._http.get(this._url, {responseType: 'text'});
  // return firstValueFrom(this._http.get(this._url));
  }

  

}
