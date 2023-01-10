import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './body/body.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SidenavComponent } from './sidenav/sidenav.component';
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
import { ImageProductComponent } from './image-product/image-product.component';
import { AddImageDialogComponent } from './dialog/add-image-dialog/add-image-dialog.component';

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
    ImageProductComponent,
    AddImageDialogComponent,
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
        MatSelectModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
