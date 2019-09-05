import { PageEvent } from '@angular/material/paginator';
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProduct} from '../interface/product.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }


  getProducts(data: PageEvent): Observable<IProduct[]> {
    const params: HttpParams = new HttpParams({
      fromObject: {
        _page: String(data.pageIndex),
        _limit: String(data.pageSize)
      }
    });

    // ?_limit=data.pageIndex&
    console.log(params);

    return this.http.get<IProduct[]>('http://localhost:3000/products', { params });
  }
}
