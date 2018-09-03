import { Injectable } from '@angular/core';
// import { Http, Response, RequestOptions, Headers, HttpClient } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { info } from "./sample.module";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class HttpSampleService {
  apiRoot: string= "https://jsonplaceholder.typicode.com";
  // data: info[];

  constructor(private http: HttpClient) { }

  getInfo(): Observable<info[]> {
    let url = `${this.apiRoot}/posts`;
    return this.http.get<info[]>(url);
    // return this.http.
   
  }

  getSearched(id: number){
      let url = `${this.apiRoot}/posts?userId=${ id }` ;
      return this.http.get<info[]>(url);
  }

}
