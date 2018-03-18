import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {HeaderComponent} from './header/header.component';
import {ListComponent} from './list/list.component';
import {DataService} from './services/data.service';
import {ProductPipe} from './pipes/product.pipe';
import {FooterComponent} from './footer/footer.component';
import {AuthGuardService} from './services/auth-guard.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ListComponent,
    ProductPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    ProductPipe
  ],
  providers: [DataService, AuthGuardService],
})
export class SharedModule { }
