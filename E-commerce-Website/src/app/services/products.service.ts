import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from 'src/data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  addProduct(data:product){
    //console.log("service called")
    return this.http.post("http://localhost:3000/products", data)
  }


}
