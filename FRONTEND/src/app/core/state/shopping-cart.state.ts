import { Injectable } from '@angular/core';
import { AddProduct, RemoveProduct } from '@core/actions/shopping-cart.action';
import { ProductsStateModel } from '@core/model/product';
import { Action, Selector, State, StateContext } from '@ngxs/store';

@State<ProductsStateModel>({
  name: 'products',
  defaults: {
    items: [],
  },
})
@Injectable()
export class ProductsState {
  @Selector()
  static getItems(state: ProductsStateModel) {
    return state.items;
  }

  @Selector()
  static getTotal(state: ProductsStateModel) {
    return state.items.length;
  }

  @Selector()
  static getTotalProductsPrice(state: ProductsStateModel) {
    return state.items
      .reduce(
        (acc, item, _, array) =>
          acc +
          item.price * array.filter((itemArray) => itemArray === item).length,
        0
      )
      .toFixed(2);
  }

  @Action(AddProduct)
  add(
    { getState, patchState }: StateContext<ProductsStateModel>,
    { payload }: AddProduct
  ) {
    const state = getState();
    patchState({
      items: [...state.items, payload],
    });
  }

  @Action(RemoveProduct)
  remove(
    { getState, patchState }: StateContext<ProductsStateModel>,
    { payload }: RemoveProduct
  ) {
    const state = getState();
    patchState({
      items:
        state.items.filter((item) => item === payload).length <= 1
          ? state.items.filter((item) => item !== payload)
          : state.items.filter(
              (_, idx) =>
                idx !==
                state.items.findIndex((itemFind) => itemFind === payload)
            ),
    });
  }
}
