import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../../shared/services/product.service';
import {Product} from '../../shared/domain/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _productService: ProductService, private _router: Router) { }

  public items: Array<Product>;

  ngOnInit() {
    this._productService.getProductList().subscribe( data  => {
      if (data) {
        this.items = data;
      }
    });
  }

  navigate(id: number) {
    if (id) {
      this._router.navigate(['/products/detail/', id]);
    }
  }

  reverse() {
    this.items.reverse();
  }
}
