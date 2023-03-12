import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import {ProductComponent} from "./product/product.component";
import {UserComponent} from "./user/user.component";
import {OrderComponent} from "./order/order.component";
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import {OrderDeliveringComponent} from "./order-delivering/order-delivering.component";
import {OderPrepareComponent} from "./oder-prepare/oder-prepare.component";
import {OrderCancelComponent} from "./order-cancel/order-cancel.component";


const routes: Routes = [
  {path: '', redirectTo: 'catalog', pathMatch: 'full'},
  {path: 'catalog', component: CatalogComponent},
  {path: 'product', component: ProductComponent},
  {path: 'user', component: UserComponent},
  {path: 'order', component: OrderComponent,
  children:[
    {path: 'ordercomplete', component: OrderCompleteComponent},
    {path: 'orderdelivering', component: OrderDeliveringComponent},
    {path: 'orderprepare', component: OderPrepareComponent},
    {path: 'ordercancel', component: OrderCancelComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
