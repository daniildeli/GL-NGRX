import { Action } from '@ngrx/store';
import {IProduct} from '../../interface/product.interface';

export enum ProductsActionTypes {
  LoadProductss = '[Products] Load Productss',
  LoadProductssSuccess = '[Products] Load Productss Success',
  LoadProductssFail = '[Products] Load Productss Fail',
}

export class LoadProductss implements Action {
  readonly type = ProductsActionTypes.LoadProductss;
  public constructor(public payload: any) {}
}

export class LoadProductssSuccess implements Action {
  readonly type = ProductsActionTypes.LoadProductssSuccess;
  public constructor(public payload: IProduct[]) {}
}

// new LoadProductssSuccess() -> { type: '[Products] Load Productss Success', payload: [] }

export class LoadProductssFail implements Action {
  readonly type = ProductsActionTypes.LoadProductssFail;
  public constructor(public payload: any) {}
}


export type ProductsActions = LoadProductss | LoadProductssSuccess | LoadProductssFail;
