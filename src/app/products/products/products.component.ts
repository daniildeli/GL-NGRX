import { LoadProductss } from './../state/actions/products.actions';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {State} from 'src/app/state/reducer/sidebar.reducer';
import {Observable} from 'rxjs';
import * as fromProducts from '../state/reducers/products.reducer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public products$: Observable<any[]>;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadProductss());


    this.isLoading$ = this.store.pipe(
      select(fromProducts.productsFeatureKey, 'isLoading')
    );

    this.products$ = this.store.pipe(
      select(fromProducts.productsFeatureKey, 'data')
    );

  }

}
