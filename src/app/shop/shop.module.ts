import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  declarations: [ShopComponent, ListComponent, DetailComponent]
})
export class ShopModule { }
