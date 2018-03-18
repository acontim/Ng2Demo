import {DataService} from './data.service';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

const SHOP_LIST = 'shop/';
import 'rxjs/add/operator/map';
import {Shop} from '../domain/shop';

@Injectable()
export class ShopService {

  constructor(private _dataService: DataService) { }

  getShopList(): Observable<Array<Shop>> {
    return this._dataService.get(SHOP_LIST)
      .map((data) => {
        return data.map((row: Shop) => {
          return {
            id: row.id,
            description: row.description
        };
        });
      });
  }

  getShop(id: number): Observable<Shop> {
    return this._dataService.get(SHOP_LIST + id);
  }
}
