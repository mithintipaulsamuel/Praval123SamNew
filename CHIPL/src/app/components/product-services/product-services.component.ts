import { Component } from '@angular/core';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-product-services',
  templateUrl: './product-services.component.html',
  styleUrls: ['./product-services.component.css']
})
export class ProductServicesComponent {
 i=0;
  constructor(private _productservice:ProductServicesService)
  {

  }
  onClick()
  {
    this.i=this.i+1;
    this._productservice.DeleteData(this.i)
  }
}
