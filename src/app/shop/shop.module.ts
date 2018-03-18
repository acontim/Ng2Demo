import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import {ShopService} from '../shared/services/shop.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule
  ],
  declarations: [ShopComponent, ListComponent, DetailComponent],
  providers: [ShopService]
})
export class ShopModule { }
