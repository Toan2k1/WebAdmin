import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import {ProductComponent} from "./product/product.component";
import { UserComponent } from './user/user.component';
import {ImageProductComponent} from "./image-product/image-product.component";

const routes: Routes = [
  {path: '', redirectTo: 'catalog', pathMatch: 'full'},
  {path: 'catalog', component: CatalogComponent},
  {path: 'product', component: ProductComponent},
  {path: 'user', component: UserComponent},
  {path: 'productImage', component:ImageProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
