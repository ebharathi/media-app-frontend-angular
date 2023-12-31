import { Component } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   constructor(private dataService:DataService,private router:Router){}
   public error:string="";
   public btn:any="SIGN IN";
   onLogin(event:Event,username:string,password:string)
   {
    this.btn="PLEASE WAIT..."
    event.preventDefault();
    if(username==""||password=="")
    {
      this.error="Please enter the credentials!";
      setTimeout(() => {
         this.error="";
         this.btn="SIGN IN"
      }, 3000);
      return;
    }
    this.dataService.loginbackend(username,password).subscribe((response:any)=>{
         console.log("[+]RESPONSE FROM BACKEND FOR LOGIN-->",response);
         if(response.error==true)
           {
            this.error=response.message;
            setTimeout(() => {
               this.error=""
            }, 5000);
            this.btn="SIGN IN"
            return;
           }
           this.btn="SIGN IN";
           localStorage.setItem('token',response.token);
           this.router.navigate(['/']);
    })

   }
}
