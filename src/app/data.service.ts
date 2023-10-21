import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http:HttpClient) { }
  private url:string="http://localhost:9000";
  signupbackend(username:string,password:string)
  {
      let signupUrl=`${this.url}/signup`;
      const data={
        username:username,
        password:password
      }
      const httpOptions={
        headers:new HttpHeaders({
          'content-type': 'application/json'
        })
      }
      return this.http.post(signupUrl,data,httpOptions);
  }
  loginbackend(username:string,password:string)
  {
     let loginUrl=`${this.url}/login`;
     const data={
      username:username,
      password:password
     }
     const httpOptions={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
     }
     return this.http.post(loginUrl,data,httpOptions);
  }
}
