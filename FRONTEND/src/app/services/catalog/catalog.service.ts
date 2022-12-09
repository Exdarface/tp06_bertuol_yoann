import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@core/model/product';
import { find, Observable } from 'rxjs';
import { ServiceBase } from '@core/services/service-base';
import { ApiHttpInterceptor } from 'app/api-http-interceptor';

@Injectable({
  providedIn: 'root',
})
export class CatalogService extends ServiceBase {
  constructor(private http: HttpClient) {
    super();
  }

  getCatalogue(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/product');
  }
}
