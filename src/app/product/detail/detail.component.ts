import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/domain/product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../shared/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public product: Product;

  constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute) {
    _activatedRoute.params.subscribe((params) => {
      _productService.getProduct(params['id']).subscribe((product) => {
        this.product = product;
      });
    });
  }

  ngOnInit() {
  }

}
