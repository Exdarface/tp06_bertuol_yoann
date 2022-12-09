import { HttpHeaders } from '@angular/common/http';
import { environment } from '@environments';
import { ApiHttpInterceptor } from 'app/api-http-interceptor';

export class ServiceBase {
  apiUrl: string = environment.api;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor() {}
}
