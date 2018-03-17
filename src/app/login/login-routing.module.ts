import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {LoginComponent} from './login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        component: LoginComponent,
        path: 'login',
        canActivate: [
          //AuthGuardService
        ],
        children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
