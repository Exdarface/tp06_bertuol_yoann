import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@core/model/product';
import { CatalogService } from '@services/catalog/catalog.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private catalogService: CatalogService,
    private route: ActivatedRoute
  ) {
    catalogService.getCatalogue().subscribe((products) => {
      this.product = products.find(
        (product) =>
          product.id.toString() === this.route.snapshot.paramMap.get('id')
      );
    });
  }

  ngOnInit(): void {}
}
