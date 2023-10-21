import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    constructor(private dataService:DataService){}
    public error:any="";
    Onsubmit(name:string,pass:string)
    { 
      //  event.preventDefault();
       console.log("[+]SIGNUP CALLED");
       if(name==""||pass=="")
       {
         this.error="Please enter name & password";
         return
       }
       this.dataService.signup(name,pass).subscribe((response:any)=>{
              console.log("RESPONSE FROM BACKEND FOR SIGN UP:",response);
       })
    }
}
