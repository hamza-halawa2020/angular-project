import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewProductService {

  constructor(private http: HttpClient) { }
url:string = `https://dummyjson.com/products/`;
  getAllProductsssss() {
    return this.http.get(this.url);
  }
  getProductsssssById(id: number) {
    return this.http.get(`${this.url}${id}`);
  }
  // getProductsssssByKeyWord(keyWord: any) {
  //   return this.http.get(`${this.url}${keyWord}`);
  // }
}

