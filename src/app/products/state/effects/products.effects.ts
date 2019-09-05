import { LoadProductssSuccess, LoadProductssFail, LoadProductss } from './../actions/products.actions';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {concatMap, mergeMap, map, catchError} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';
import {ProductsActionTypes, ProductsActions} from '../actions/products.actions';
import {ProductsService} from '../../services/products.service';
import {IProduct} from '../../interface/product.interface';



@Injectable()
export class ProductsEffects {


  @Effect()
  loadProductss$ = this.actions$.pipe(
    ofType(ProductsActionTypes.LoadProductss),
    map((action: LoadProductss) => action.payload),
    mergeMap((data: any) => this.productsService.getProducts(data)
      .pipe(
        map((products: IProduct[]) => (new LoadProductssSuccess(products))),
        catchError((err) => of(new LoadProductssFail(err)))
      )
    ));

    // @Effect()
    // loadProductss111$ = this.actions$.pipe(
    //   ofType(ProductsActionTypes.LoadProductssSuccess),
    //   // map((action: LoadProductssSuccess) => action.payload),
    //   mergeMap(() => this.productsService.getProducts({} as any)
    //     .pipe(
    //       map((products: IProduct[]) => ([new LoadProductssSuccess(products)])),
    //       catchError((err) => of(new LoadProductssFail(err)))
    //     )
    //   ));


  constructor(
    private actions$: Actions<ProductsActions>,
    private productsService: ProductsService
  ) {}

}
