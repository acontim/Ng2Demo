import {Injectable} from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }

  get(path: string): Observable<any> {
    return this.httpClient.get(environment.API + path);
  }

  post(path: string, data: any): Observable<any> {
    const body: string = JSON.stringify(data);
    return this.httpClient.post(environment.API + path, body);
  }

  put(path: string, data: any): Observable<any> {
    const body: string = JSON.stringify(data);
    return this.httpClient.put(environment.API + path, body);
  }

  delete(path: string): Observable<any> {
    return this.httpClient.delete(environment.API + path);
  }
}
