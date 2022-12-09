import { Component, OnInit } from '@angular/core';
import { RemoveProduct } from '@core/actions/shopping-cart.action';
import { Product } from '@core/model/product';
import { ProductsState } from '@core/state/shopping-cart.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private store: Store) {
    this.products$ = this.store.select(ProductsState.getItems);
  }

  onClickRemove(product: Product) {
    this.store.dispatch(new RemoveProduct(product));
  }

  ngOnInit(): void {}
}
