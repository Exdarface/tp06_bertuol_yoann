import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceBase } from '@core/services/service-base';
import { ApiHttpInterceptor } from 'app/api-http-interceptor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends ServiceBase {
  constructor(private http: HttpClient) {
    super();
  }

  login(login: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/login', {
      login: login,
      password: password,
    });
  }
}
