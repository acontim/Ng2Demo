import {DataService} from './data.service';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

const PRODUCT_LIST = 'product';
import 'rxjs/add/operator/map';
import {Product} from '../domain/product';

@Injectable()
export class ProductService {

  constructor(private _dataService: DataService) { }

  getProductList(): Observable<Array<Product>> {
    return this._dataService.get(PRODUCT_LIST)
      .map((data) => {
        return data.map((row: Product) => {
          return {
            id: row.id,
            description: row.description
        };
        });
      });
  }
}
