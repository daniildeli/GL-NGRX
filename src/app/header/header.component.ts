import { ToggleSidebar } from './../state/actions/sidebar.actions';
import { State } from './../state/reducer/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.store.subscribe((data) => {
      console.log(data);
    })
  }

  toggle() {
    this.store.dispatch(new ToggleSidebar());
  }

}
