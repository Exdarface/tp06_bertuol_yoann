import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '@core/model/client';
import { ServiceBase } from '@core/services/service-base';
import { ApiHttpInterceptor } from 'app/api-http-interceptor';

@Injectable()
export class ClientService extends ServiceBase {
  constructor(private http: HttpClient) {
    super();
  }

  getClient(): Client {
    return new Client(
      'John',
      'Doe',
      'test@gmail.com',
      '1234567890',
      '123 Main St',
      'New York',
      'Male',
      '12345',
      'USA',
      'test',
      'test',
      'test'
    );
  }

  //create method to post a client
  postClient(client: Client) {
    console.log(client);
  }
}
