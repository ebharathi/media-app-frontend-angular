import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http:HttpClient) { }
  private url:string="https://media-app-backend-nodejs-postgre-sql.vercel.app";
  // private url:string="http://localhost:9000"
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
  uploadImage(form:any)
  {
     let uploadUrl=`${this.url}/upload`;
     let token=localStorage.getItem('token')??'notoeknpresentinthestorage';
     const httpOptions={
      headers:new HttpHeaders({
        authorization:token
      })
     }
     return this.http.post(uploadUrl,form,httpOptions);
  }
  getUserData(){
    let userUrl=`${this.url}/user`;
    let token=localStorage.getItem('token')??'notokenpresentinthestorage';
    const httpOptions={
      headers:new HttpHeaders({
        authorization:token
      })
    }
    console.log("headers--->",httpOptions)
    return this.http.post(userUrl,{},httpOptions);
  }
  getFollowerData(id:any){
    let userUrl=`${this.url}/follower`;
    let token=localStorage.getItem('token')??'notokenpresentinthestorage';
    const httpOptions={
      headers:new HttpHeaders({
        authorization:token
      })
    }
    let data={id:id}
    return this.http.post(userUrl,data,httpOptions);
  }
  getAllChannels()
  {
    let channelUrl=`${this.url}/channel/list`;
    let token=localStorage.getItem('token')??'notokenpresentinthestorage';
    const httpOptions={
      headers:new HttpHeaders({
        authorization:token
      })
    }
    return this.http.get(channelUrl,httpOptions);
  }
  getParticularChannel(id:any)
  {
    let channelUrl=`${this.url}/channel/get-details`;
    let token=localStorage.getItem('token')??'notokenpresentinthestorage';
    const httpOptions={
      headers:new HttpHeaders({
        authorization:token
      })
    }
    let data={id:id}
    return this.http.post(channelUrl,data,httpOptions)
  }
  createChannel(form:any)
  {
    let channelUrl=`${this.url}/channel/create`;
    let token=localStorage.getItem('token')??'notokenpresentinthestorage';
    const httpOptions={
      headers:new HttpHeaders({
        authorization:token
      })
    }
    
    return this.http.post(channelUrl,form,httpOptions);
  }
  joinChannel(channelId:any)
  {
    let channelUrl=`${this.url}/channel/join`;
    let token=localStorage.getItem('token')??'notokenpresentinthestorage';
    const httpOptions={
      headers:new HttpHeaders({
        authorization:token
      })
    }
    let data={
         channelId:channelId
    }
    return this.http.post(channelUrl,data,httpOptions);
  }
  addMessages(channelId:any,text:any)
  {
    let channelUrl=`${this.url}/message/add`;
    let token=localStorage.getItem('token')??'notokenpresentinthestorage';
    const httpOptions={
      headers:new HttpHeaders({
        authorization:token
      })
    }
    let data={
         channelId:channelId,
         message:text
    }
    return this.http.post(channelUrl,data,httpOptions);
  }
  getAllmessages(channelId:any)
  {
    let channelUrl=`${this.url}/message/list`;
    let token=localStorage.getItem('token')??'notokenpresentinthestorage';
    const httpOptions={
      headers:new HttpHeaders({
        authorization:token
      })
    }
    let data={
         channelId:channelId
    }
    return this.http.post(channelUrl,data,httpOptions);
  }
}
