import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewProductService {

  constructor(private http: HttpClient) { }

  getAllProductsssss() {
    return this.http.get(`https://dummyjson.com/products/`);
  }
  getProductsssssById(id: number) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
  getProductsssssByKeyWord(keyWord: any) {
    return this.http.get(`https://dummyjson.com/products/${keyWord}`);
  }
}

