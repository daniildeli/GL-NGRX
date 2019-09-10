import { cartTotalSumSelector, cartTotalSelector, cartTotalSumSelectorMultiplid, productSelector } from './../cart/reducers/cart.reducer';
import { ICart } from './../cart/interfaces/cart.interface';
import { ToggleSidebar } from './../state/actions/sidebar.actions';
import { State } from './../state/reducer/index';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {cartFeatureKey} from '../cart/reducers/cart.reducer';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalSum$: Observable<number>;

  public totalSumMultiplied$: Observable<number>;

  public totalEl$: Observable<number>;


  test;
  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {

    this.store.pipe(
      select(productSelector)
    ).subscribe((data) => {
      console.log(data);

    })


    this.totalEl$ = this.store.pipe(
      select(cartTotalSelector)
    );

    this.totalSum$ = this.store.pipe(
      select(cartTotalSumSelector),
    );

    this.totalSumMultiplied$ = this.store.pipe(
      select(cartTotalSumSelectorMultiplid, { multiply: 2 }),
    );

    this.store.subscribe((data) => {
      console.log(data);
    });
  }

  toggle() {
    this.store.dispatch(new ToggleSidebar());
  }

}
