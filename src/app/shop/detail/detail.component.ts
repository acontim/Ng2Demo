import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Shop} from '../../shared/domain/shop';
import {ShopService} from '../../shared/services/shop.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public shop: Shop;

  constructor(private _shopService: ShopService, private _activatedRoute: ActivatedRoute) {
    _activatedRoute.params.subscribe((params) => {
      _shopService.getShop(params['id']).subscribe((shop) => {
        this.shop = shop;
      });
    });
  }

  ngOnInit() {
  }

}
