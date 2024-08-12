import { NgModule, Sanitizer } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MENComponent } from './men/men.component';
import { WOMENComponent } from './women/women.component';
import { KurthiComponent } from './women/kurthi/kurthi.component';
import { KurthiDetailsComponent } from './women/kurthi-details/kurthi-details.component';
import { ProductListComponent } from './women/product-list/product-list.component';
import { ProductDetailComponent } from './women/product-detail/product-detail.component';
import { BagComponent } from './women/bag/bag.component';



const routes: Routes = [

 {path:'men',component:MENComponent},
 {path:'women', component:WOMENComponent},
 {path:'kurthi', component:KurthiComponent},
 {path:'kurthidetails/:id', component:KurthiDetailsComponent},
 {path:'productlist', component: ProductListComponent },
 {path:'product-detail/:id', component: ProductDetailComponent },
 {path:'bag',component:BagComponent}

 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
