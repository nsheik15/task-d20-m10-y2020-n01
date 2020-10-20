//import { DummyData } from './dummy';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  url = 'https://jsonplaceholder.typicode.com/users';
  // dummy_url = './../assets/dummy.json';

  constructor(private _http: HttpClient) { }

  getData(): Observable<any> {
    return this._http.get<any>(this.url);
  }

}
