import { ICart } from './../interfaces/cart.interface';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import * as fromCart from '../reducers/cart.reducer';
import {DeleteProductfromCart} from '../actions/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart$: Observable<ICart[]>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.cart$ = this.store.pipe(
      select(fromCart.cartFeatureKey)
    );
  }


  deleteFromCart(id: number): void {
    this.store.dispatch(new DeleteProductfromCart(id));
  }
}
