import { Router, ActivatedRoute } from '@angular/router';
import { ShopService } from '../../services/shop.service';
import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import {Product} from '../../interfaces/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  categories;
  public product: Product;
  private productId;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private shopService: ShopService
  ) {

    this.categories = categoryService.getAll()
      .snapshotChanges()
      .map(category => {
        return category.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.shopService.get(id).subscribe(action => {
        this.product = action.payload.val();
        this.productId = action.key;
      });
    }

  }

  save(product) {
    if (this.productId) {
      this.shopService.update(this.productId, product);
    } else {
      this.shopService.create(product);
    }
    this.router.navigate(['/admin/shop']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) {
      return;
    }

    this.shopService.delete(this.productId);
    this.router.navigate(['/admin/shop']);

  }

}
