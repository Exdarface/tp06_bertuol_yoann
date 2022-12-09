import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from '@components/catalog/catalog.component';
import { ProductDetailsComponent } from '@components/product-details/product-details.component';
import { SearchBarComponent } from '@components/search-bar/search-bar.component';
import { ShoppingCartComponent } from '@components/shopping-cart/shopping-cart.component';
import { CatalogService } from '@services/catalog/catalog.service';

const appRoutes: Routes = [
  { path: 'cart', component: ShoppingCartComponent },
  { path: ':id', component: ProductDetailsComponent },
  { path: '', component: CatalogComponent },
];

@NgModule({
  declarations: [
    CatalogComponent,
    SearchBarComponent,
    ShoppingCartComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [CatalogService],
  exports: [RouterModule],
})
export class CatalogModule {}
