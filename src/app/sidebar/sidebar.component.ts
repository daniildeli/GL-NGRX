import { State } from './../state/reducer';
import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';
import {sidebarFeatureKey} from '../state/reducer/sidebar.reducer';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public isActive$: Observable<boolean>;


  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    // this.store.select('sidebar');
    this.isActive$ = this.store.pipe(
      select(sidebarFeatureKey)
    );

    this.isActive$.subscribe((data) => {
      console.log('sidebar:', data);
    })

    this.store.subscribe((data) => {
      console.log(data);
    })
  }

}
