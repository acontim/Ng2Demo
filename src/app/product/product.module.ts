import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {SharedModule} from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import {ProductRoutingModule} from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [ProductComponent, ListComponent]
})
export class ProductModule { }
