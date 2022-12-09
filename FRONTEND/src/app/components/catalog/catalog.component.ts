import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { CatalogService } from '@services/catalog/catalog.service';
import { Product } from '@core/model/product';
import { Store } from '@ngxs/store';
import { AddProduct } from '@core/actions/shopping-cart.action';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  filterer: string = '';
  catalog: Product[] = [];
  subscription: Subscription;
  constructor(public catalogService: CatalogService, private store: Store) {
    this.subscription = this.getCatalog();
  }

  ngOnInit(): void {}

  getCatalog(): Subscription {
    return this.catalogService.getCatalogue().subscribe((products) => {
      this.catalog = products;
    });
  }
  updateProducts(products: Product[]) {
    this.catalog = products;
  }

  onClickAdd(product: Product) {
    this.store.dispatch(new AddProduct(product));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
