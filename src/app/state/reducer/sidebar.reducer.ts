import { Action } from '@ngrx/store';
import * as fromSidebar from './../actions/sidebar.actions';

export const sidebarFeatureKey = 'sidebar';

export type State = boolean;

export const initialState: State = false;

export function reducer(state = initialState, action: fromSidebar.SidebarActions): State {
  switch (action.type) {


    case fromSidebar.SidebarActionTypes.ToggleSidebar: {
      console.log(action);
      return !state;
    }


    // .. 1

    default:
      return state;
  }
}
