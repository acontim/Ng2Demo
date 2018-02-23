import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient){
    //Empty constructor
  }

  get(url: string): Observable<any>{
    return this.httpClient.get(environment.API + url)
      //.map((data) => DataService.extractData(<any>data));
  }


  private static extractData(res: Response): any {
    switch (res.status) {
      case 200:
      case 201:
      case 202:
      case 203: // ok
        let body = (<any>res)._body;
        return body ? res.json() : '';
      case 204: // ok - no content response
        return '';
      case 400: // api error condition (to process)
      case 401: // not authorized
      case 404: // not found
      case 500: // unknown server error
      case 503: // lock service not available
        return `${res.status}: ${res.statusText}`;
      default:
        return res;
    }
  }

}
