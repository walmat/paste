import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ShopService {

  constructor(private db: AngularFireDatabase) { }

  find(id) {
    return this.db.object(`products/${id}`).snapshotChanges();
  }

  create(product) {
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products');
  }

  get(productId) {
    return this.db.object(`products/${productId}`).snapshotChanges();
  }

  update(productId, product) {
    return this.db.object(`/products/${productId}`).update(product);
  }

  delete(productId) {
    return this.db.object(`/products/${productId}`).remove();
  }

}
