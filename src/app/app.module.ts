import { LoginComponent } from './login/login.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    ProductsComponent,
    HomeComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent
      },
      {
        path: 'order-success',
        component: OrderSuccessComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },

      /** admin-routes */
      {
        path: 'admin/products',
        component: AdminProductsComponent
      },
      {
        path: 'admin/orders',
        component: AdminOrdersComponent,

      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
