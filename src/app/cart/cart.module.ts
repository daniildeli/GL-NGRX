import { SharedModule } from './../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import * as fromCart from './reducers/cart.reducer';
import {EffectsModule} from '@ngrx/effects';
import {CartEffects} from './effects/cart.effects';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.reducer),
    EffectsModule.forFeature([CartEffects]),
    SharedModule,
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: CartComponent
    //   }
    // ])
  ],
  exports: [CartComponent]
})
export class CartModule { }
