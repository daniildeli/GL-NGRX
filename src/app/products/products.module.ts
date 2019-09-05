import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { StoreModule } from '@ngrx/store';
import * as fromProducts from './state/reducers/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './state/effects/products.effects';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(fromProducts.productsFeatureKey, fromProducts.reducer),
    EffectsModule.forFeature([ProductsEffects]),
    SharedModule
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
