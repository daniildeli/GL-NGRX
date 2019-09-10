import { environment } from './../../../environments/environment';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromSidebar from './sidebar.reducer';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';


export interface State {
  sidebar: fromSidebar.State;
  // router: any;
}

export const reducers: ActionReducerMap<State> = {
  sidebar: fromSidebar.reducer,
  // router: routerReducer,
  // user
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
