import { Component, OnInit } from '@angular/core';
import {Item} from '../../shared/list/list.model';
import {ProductService} from '../shared/product.service';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  private items$: Observable<Array<Item>>;
  ngOnInit() {
    this.items$ = this.productService.getProductList();
  }

  navigate(id: number){
    if (id){
      this.router.navigate(['/products/detail/', id]);
    }
  }

}
