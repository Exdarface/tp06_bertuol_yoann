export class Product {
  id: number = 0;
  name: string = '';
  description: string = '';
  price: number = 0;
  constructor(
    id: number = 0,
    name: string = '',
    description: string = '',
    price: number = 0
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

export class ProductsStateModel {
  public items: Product[] = [];
}
