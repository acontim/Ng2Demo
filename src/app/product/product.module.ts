import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {ProductRoutingModule} from './product-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import {SharedModule} from '../shared/shared.module';
import {DataService} from '../shared/data.service';
import {ProductService} from './shared/product.service';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ],
  declarations: [
    ProductComponent,
    ListComponent,
    DetailComponent
  ],
  providers: [ProductService],
})
export class ProductModule { }
