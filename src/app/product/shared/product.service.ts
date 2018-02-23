import {Injectable} from '@angular/core';
import {DataService} from '../../shared/data.service';
import {Observable} from 'rxjs/Observable';
import {Product} from '../../shared/domain/product';

const PRODUCT_LIST = 'product';
import 'rxjs/add/operator/map';

@Injectable()

export class ProductService{


  constructor(private dataService: DataService){
    //Empty
  }

  getProductList(): Observable<Array<Product>>{
    return this.dataService.get(PRODUCT_LIST)
      .map((data) => {
        return data.map((row: Product) => {
          return {
            id: row.id,
            description: row.description;
          }  ;
        });
      });
  }
}
