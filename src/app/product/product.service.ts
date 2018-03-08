import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService{
    private _url:string="";
    constructor(private _http: Http){}

    getProducts(){
       // console.log(this._http.get('../app/producct/product-data.json'));
        return this._http.get('product-data.json')
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError:(errorResponse:any)=>Observable<any>=(errorResponse:any)=>{

        let res=<Response>errorResponse;
        let error = res.json();
        let emsg= error? ( error.error ? error.error: JSON.stringify(error)):(res.statusText ||'unknown error');
        console.log(emsg);
        return Observable.of();
    }

}