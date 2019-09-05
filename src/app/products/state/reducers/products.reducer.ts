
import { ProductsActions, ProductsActionTypes } from '../actions/products.actions';
import {IProduct} from '../../interface/product.interface';

export const productsFeatureKey = 'products';

export interface State {
  isLoading: boolean;
  data: IProduct[];
}

export const initialState: State = {
  isLoading: false,
  // error: null,
  data: [
    // {title: 'prodcut1'},
    // {title: 'prodcut2'},
    // {title: 'prodcut3'},
  ]
};

export function reducer(state = initialState, action: ProductsActions): State {
  switch (action.type) {

    case ProductsActionTypes.LoadProductss: {
      // this servive getProduct. subscribe -> data
      // []  {}

      return {
        ...state,
        isLoading: true,
      };
    }


    case ProductsActionTypes.LoadProductssSuccess: {
      // action.payload

      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    }

    case ProductsActionTypes.LoadProductssFail: {
      return state;
    }

    default:
      return state;
  }
}
