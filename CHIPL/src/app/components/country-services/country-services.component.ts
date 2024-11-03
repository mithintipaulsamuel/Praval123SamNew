import { Component } from '@angular/core';
import { CountryServicesService } from 'src/app/services/country-services.service';

@Component({
  selector: 'app-country-services',
  templateUrl: './country-services.component.html',
  styleUrls: ['./country-services.component.css']
})
export class CountryServicesComponent 
{
  Bigdata=[];
  constructor(private _countryService:CountryServicesService)
  {
  }
  ngOnInit()
  {
    this.getdata();
  }
  getdata()
  {
      this._countryService.GetData().then(
        (cdBhai)=>{
            console.log(cdBhai);
            this.Bigdata=cdBhai;
        }
      );
  }
}
