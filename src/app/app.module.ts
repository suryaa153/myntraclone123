import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MENComponent } from './men/men.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WOMENComponent } from './women/women.component';
import { KurthiComponent } from './women/kurthi/kurthi.component';
import { KurthiDetailsComponent } from './women/kurthi-details/kurthi-details.component';
import { ProductListComponent } from './women/product-list/product-list.component';
import { ProductDetailComponent } from './women/product-detail/product-detail.component';
import { BagComponent } from './women/bag/bag.component';
import { WishlistComponent } from './women/wishlist/wishlist.component';


@NgModule({
  declarations: [
    AppComponent,
    MENComponent,
    WOMENComponent,
    KurthiComponent,
    HeaderComponent,
    KurthiDetailsComponent,
    ProductListComponent,
    ProductDetailComponent,
    BagComponent,
    WishlistComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
