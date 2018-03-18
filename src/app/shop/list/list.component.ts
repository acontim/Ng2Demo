import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Shop} from '../../shared/domain/shop';
import {ShopService} from '../../shared/services/shop.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _shopService: ShopService, private _router: Router) { }

  public items: Array<Shop>;

  ngOnInit() {
    this._shopService.getShopList().subscribe( data  => {
      if (data) {
        this.items = data;
      }
    });
  }

  navigate(id: number) {
    if (id) {
      this._router.navigate(['shops/detail/', id]);
    }
  }

  reverse() {
    this.items.reverse();
  }

}
