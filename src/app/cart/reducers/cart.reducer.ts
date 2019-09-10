import { IProduct } from 'src/app/products/interface/product.interface';
import { ICart } from './../interfaces/cart.interface';

import { CartActions, CartActionTypes } from '../actions/cart.actions';
import {createSelector, MemoizedSelector, MemoizedSelectorWithProps} from '@ngrx/store';

export const cartFeatureKey = 'cart';

export type State = ICart[];

export const initialState: State = [];

export function reducer(state = initialState, action: CartActions): State {
  switch (action.type) {

    case CartActionTypes.LoadCarts: {
      return state;
    }

    case CartActionTypes.AddProductToCart: {
      const el: ICart | undefined = state.find((product: IProduct) => action.payload.id === product.id);

      if (!el) {
        return [...state, {...action.payload, amount: 1}];
      }


      // { ...el, amount: el.amount + 1 }
      const index: number = state.findIndex((product: ICart) => action.payload.id === product.id);


        console.log(index);



      const cloneState = [...state];

      cloneState[index] = { ...el, amount: el.amount + 1 };


      // cloneState.splice(index, 1, { ...el, amount: el.amount + 1 });
      return cloneState;
    }

    case CartActionTypes.DeletePoductFromCart: {
      return state.filter((product: IProduct) => product.id !== action.payload);
    }

    default:
      return state;
  }
}



// global state
export const selectFeature = (state: any) => state.cart;
export const selectProductsFeature = (state: any) => state.products;

export const cartTotalSumSelector: MemoizedSelector<ICart[], number> = createSelector(
  selectFeature,
  (state: ICart[]) => {
    console.log(state);
    return state.reduce((acc: number, next: ICart) =>  acc + next.price * next.amount, 0);
  }
);

export const cartTotalSumSelectorMultiplid
: MemoizedSelectorWithProps<ICart[], { multiply: number }, number> = createSelector(
  selectFeature,
  (state: ICart[], props: { multiply: number }) => {
    console.log('PROPS.', props);
    return state.reduce((acc: number, next: ICart) =>  acc + next.price * next.amount, 0);
  }
);


export const cartTotalSelector: MemoizedSelector<ICart[], number> = createSelector(
  selectFeature,
  (state: ICart[]) => state.length
);


export const productSelector: MemoizedSelector<ICart[], any> = createSelector(
  selectFeature,
  selectProductsFeature,

  //
  (cart: ICart[], products: any) => {

    console.log(cart, products.data);

    return products;
  }
);
