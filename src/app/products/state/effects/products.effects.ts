import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ProductsActionTypes, ProductsActions } from '../actions/products.actions';



@Injectable()
export class ProductsEffects {


  @Effect()
  loadProductss$ = this.actions$.pipe(
    ofType(ProductsActionTypes.LoadProductss),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<ProductsActions>) {}

}
