import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './body/body.component';
import { CatalogComponent } from './catalog/catalog.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import { AddUserDialogComponent } from './dialog/add-user-dialog/add-user-dialog.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { EditUserDialogComponent } from './dialog/edit-user-dialog/edit-user-dialog.component';
import {MatIconModule} from "@angular/material/icon";
import { AddCatalogDialogComponent } from './dialog/add-catalog-dialog/add-catalog-dialog.component';
import { EditCatalogDialogComponent } from './dialog/edit-catalog-dialog/edit-catalog-dialog.component';
import { AddProductDialogComponent } from './dialog/add-product-dialog/add-product-dialog.component';
import {MatSelectModule} from "@angular/material/select";
import { EditProductDialogComponent } from './dialog/edit-product-dialog/edit-product-dialog.component';
import { EditOrderComponent } from './dialog/edit-order/edit-order.component';
import {ProductComponent} from "./product/product.component";
import {UserComponent} from "./user/user.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {OrderComponent} from "./order/order.component";
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { OrderDeliveringComponent } from './order-delivering/order-delivering.component';
import { OderPrepareComponent } from './oder-prepare/oder-prepare.component';
import { OrderCancelComponent } from './order-cancel/order-cancel.component';
import {LoginModule} from "./login/login.module";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ProductComponent,
    UserComponent,
    CatalogComponent,
    SidenavComponent,
    AddUserDialogComponent,
    EditUserDialogComponent,
    AddCatalogDialogComponent,
    EditCatalogDialogComponent,
    AddProductDialogComponent,
    EditProductDialogComponent,
    OrderComponent,
    EditOrderComponent,
    OrderCompleteComponent,
    OrderDeliveringComponent,
    OderPrepareComponent,
    OrderCancelComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatPaginatorModule,
        MatTableModule,
        HttpClientModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
      LoginModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
