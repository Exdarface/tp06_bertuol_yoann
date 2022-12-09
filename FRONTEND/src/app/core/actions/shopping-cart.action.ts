import { Product } from '@core/model/product';

export class AddProduct {
  static readonly type = '[Product] AddProduct';
  constructor(public payload: Product) {}
}

export class RemoveProduct {
  static readonly type = '[Product] RemoveProduct';
  constructor(public payload: Product) {}
}
