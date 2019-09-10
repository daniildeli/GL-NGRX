import { Action } from '@ngrx/store';
import {IProduct} from 'src/app/products/interface/product.interface';

export enum CartActionTypes {
  LoadCarts = '[Cart] Load Carts',


  AddProductToCart = '[Cart] Add Product to Cart',
  DeletePoductFromCart = '[Cart] Delete Poduct From Cart',

}

export class LoadCarts implements Action {
  readonly type = CartActionTypes.LoadCarts;
}

export class AddProductToCart implements Action {
  readonly type = CartActionTypes.AddProductToCart;
  public constructor(public payload: IProduct) {}
}

export class DeleteProductfromCart implements Action {
  readonly type = CartActionTypes.DeletePoductFromCart;
  public constructor(public payload: number ) {} // id
}


export type CartActions = LoadCarts | AddProductToCart | DeleteProductfromCart;
