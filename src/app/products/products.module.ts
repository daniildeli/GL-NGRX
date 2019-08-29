import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { StoreModule } from '@ngrx/store';
import * as fromProducts from './state/reducers/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './state/effects/products.effects';



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromProducts.productsFeatureKey, fromProducts.reducer),
    EffectsModule.forFeature([ProductsEffects])
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
