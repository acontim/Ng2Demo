import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/products/list',
      },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
