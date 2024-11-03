import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryServicesService {

  private _url="https://restcountries.com/v3.1/all";
  constructor(private _http:HttpClient) { }
  GetData():Promise<any>
  {
  // return  this._http.get(this._url).toPromise();
  return firstValueFrom(this._http.get(this._url));
  }
}
