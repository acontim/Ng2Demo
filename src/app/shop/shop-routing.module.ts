import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopComponent} from './shop.component';
import {AuthGuardService} from '../shared/services/auth-guard.service';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        component: ShopComponent,
        path: 'shops',
        canActivate: [
          AuthGuardService
        ],
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'detail', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: ListComponent },
          { path: 'detail/:id', component: DetailComponent }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
