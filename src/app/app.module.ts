import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { AppComponent } from './start/app.component';

import { NavComponent } from './shared/navbar.component';
import { HomeComponent } from './home/home.component';
import {ProductListComponent} from './product/product-list.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './shared/app.routing';
import {ProductService} from './product/product.service';

import { AdminModule }  from './admin/admin.module';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AdminModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NavComponent,      
        HomeComponent,
        ProductListComponent,
        ErrorComponent
    ],
    providers:[ProductService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
