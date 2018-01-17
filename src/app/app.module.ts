import { ShoppingCartService } from './services/shopping-cart.service';
import { ShopService } from './services/shop.service';
import { FormsModule } from '@angular/forms';
import { CategoryService } from './services/category.service';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth-guard';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './navbar/app-navbar.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ShopFilterComponent } from './shop/shop-filter/shop-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomeComponent,
    ShopComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    LoginComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    ShopFilterComponent,
    ProductCardComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    CustomFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'shop',
        component: ShopComponent
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'check-out',
        component: CheckOutComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'order-success',
        component: OrderSuccessComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'my/orders',
        component: MyOrdersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'admin/shop/new',
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'admin/shop/:id',
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'admin/shop',
        component: AdminProductsComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      }
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    AdminAuthGuard,
    CategoryService,
    ShopService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
