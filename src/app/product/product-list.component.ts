import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';



@Component({
    selector:'product-list',
    
    templateUrl:'product-list.component.html',
    styleUrls: ['product-list.component.css'] ,
    providers:[ProductService]
})
export class ProductListComponent implements OnInit{
    
    
    products : Product[];
    error:string;
    constructor(private _productService: ProductService){}
    ngOnInit(){
        this._productService.getProducts()
            .subscribe(products => this.products = products,
                         err => {console.log("Error occurred")});

    }

}