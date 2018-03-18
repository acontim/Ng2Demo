import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {SharedModule} from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import {ProductRoutingModule} from './product-routing.module';
import { DetailComponent } from './detail/detail.component';
import {ProductService} from '../shared/services/product.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [ProductComponent, ListComponent, DetailComponent],
  providers: [ProductService]
})
export class ProductModule { }
