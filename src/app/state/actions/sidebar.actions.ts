import { Action } from '@ngrx/store';

export enum SidebarActionTypes {
  LoadSidebars = '[Sidebar] Load Sidebars',



  ToggleSidebar = '[Sidebar] Toggle Sidebar'
}

export class LoadSidebars implements Action {
  readonly type = SidebarActionTypes.LoadSidebars;
  public constructor(public payload: any[]) {}
}

export class ToggleSidebar implements Action {
  readonly type = SidebarActionTypes.ToggleSidebar;
}


export type SidebarActions =
  LoadSidebars |
  ToggleSidebar;


// new LoadSidebars([1, 2]) - > { type: '[Sidebar] Load Sidebars', payload: [1, 2] }

// {
//   type: string,
//   payload?: any
// }
