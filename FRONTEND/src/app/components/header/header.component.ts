import { Component, OnInit } from '@angular/core';
import { ProductsState } from '@core/state/shopping-cart.state';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  numberProduct$: Observable<number>;
  constructor(private store: Store) {
    this.numberProduct$ = this.store.select(ProductsState.getTotal);
  }

  ngOnInit(): void {}
}
