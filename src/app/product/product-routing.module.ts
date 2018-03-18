import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductComponent} from './product.component';
import {ListComponent} from './list/list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        component: ProductComponent,
        path: 'products',
        canActivate: [
          // AuthGuardService
        ],
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'detail', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: ListComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
