import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import {Product} from '../interfaces/product';

@Injectable()
export class ShoppingCartService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  private create() {
    return this.db.list(`/shopping-carts`).push({
      dateCreated: new Date().getTime()
    });
  }

  private getCart(cartId: string) {
    return this.db.object(`/shopping-carts/${cartId}`);
  }

  private async getOrCreateCart() {

    const cartId = localStorage.getItem(`cartId`);

    if (!cartId) {

      const result = await this.create();

      localStorage.setItem(`cartId`, result.key);

      return this.getCart(result.key);

    }

    return this.getCart(cartId);

  }

  public addToCart(product: Product) {
    /* steps here are:
    * 1. get or create cart
    * 2. split into two different paths:
    *   1. join queue if product available
    *   2. empty cart due to product unavailability
    * 3. maintain cart for x-amount of minutes during hyped releases
    * */

  }

}
