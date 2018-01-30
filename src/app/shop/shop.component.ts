import { Product } from './../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../services/shop.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  shop: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  constructor(
    private router: ActivatedRoute,
    private shopService: ShopService
  ) { }

  ngOnInit() {
    this.shopService.getAll().snapshotChanges().subscribe(products => {
      products.forEach(element => {
        this.shop.push(element.payload.val());
      });

      this.router.queryParamMap.subscribe(params => {

        this.category = params.get('category');

        this.filteredProducts = (this.category) ?
          this.shop.filter(p => p.category === this.category) :
          this.shop;
      });
    });
  }
}
