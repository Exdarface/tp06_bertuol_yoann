import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {
  jwtToken: String = '';

  constructor(private route: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.jwtToken != '') {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.jwtToken}`,
          'Content-Type': 'application/json',
        },
      });
    }

    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            let tab: Array<String>;
            let authorizationHeader = event.headers.get('Authorization');
            if (authorizationHeader != null) {
              tab = authorizationHeader.split(/Bearer\s+(.*)$/i);
              if (tab.length > 1) {
                this.jwtToken = tab[1];
              }
            }
          }
        },
        (error: HttpErrorResponse) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.route.navigate(['/']);
              location.reload();
            }
          }
        }
      )
    );
  }
}
