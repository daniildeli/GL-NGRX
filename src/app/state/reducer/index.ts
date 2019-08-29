import { environment } from './../../../environments/environment';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromSidebar from './sidebar.reducer';

export interface State {
  sidebar: fromSidebar.State;
}

export const reducers: ActionReducerMap<State> = {
  sidebar: fromSidebar.reducer,
  // user
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
