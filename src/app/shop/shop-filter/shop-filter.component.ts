import { CategoryService } from './../../services/category.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-filter',
  templateUrl: './shop-filter.component.html',
  styleUrls: ['./shop-filter.component.css']
})
export class ShopFilterComponent implements OnInit {
  categories;
  @Input('category') category;
  constructor(
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getAll().snapshotChanges().map(category => {
      return category.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

}
