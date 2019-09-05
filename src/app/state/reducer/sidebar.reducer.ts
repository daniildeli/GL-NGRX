import { Action } from '@ngrx/store';
import * as fromSidebar from './../actions/sidebar.actions';

export const sidebarFeatureKey = 'sidebar';

export type State = boolean;


// Boolean(localStorage.getItem('sidebar'))
export const initialState: State = true;

export function reducer(state = initialState, action: fromSidebar.SidebarActions): State {
  switch (action.type) {


    case fromSidebar.SidebarActionTypes.ToggleSidebar: {
      console.log(action);

      // service
      // if (!state) {
      //   localStorage.clear();
      // }
      // localStorage.setItem('sidebar', 'true');

      return !state;
    }


    // .. 1

    default:
      return state;
  }
}
