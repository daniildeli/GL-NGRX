
import { ProductsActions, ProductsActionTypes } from '../actions/products.actions';

export const productsFeatureKey = 'products';

export interface State {
  isLoading: boolean;
  data: any[];
}

export const initialState: State = {
  isLoading: false,
  data: [
    // {title: 'prodcut1'},
    // {title: 'prodcut2'},
    // {title: 'prodcut3'},
  ]
};

export function reducer(state = initialState, action: ProductsActions): State {
  switch (action.type) {

    case ProductsActionTypes.LoadProductss: {
      return {
        ...state,
        isLoading: true,
      };
    }

    default:
      return state;
  }
}
