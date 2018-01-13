import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {HeaderComponent} from './header/header.component';
import {ListComponent} from './list/list.component';
import {DataService} from './data.service';
import {ProductPipe} from './pipes/product.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
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
    ListComponent,
    ProductPipe
  ],
  providers: [DataService],
})
export class SharedModule { }
