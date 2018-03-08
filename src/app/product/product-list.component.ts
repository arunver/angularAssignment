import { Component, OnInit } from '@angular/core';
import { ProductData } from './product';
import { ProductService } from './product.service';


@Component({
    selector:'<product-list></product-list>',
    templateUrl:`
        <div *ngFor="let product of products">

        </div>
    `,
    providers:[ProductService]
})
export class ProductListComponent implements OnInit{
    
    
    products : ProductData[];

    constructor(private _productService: ProductService){}
    ngOnInit(){
        this._productService.getProducts()
            .subscribe(productData => this.products = productData);
    }

}