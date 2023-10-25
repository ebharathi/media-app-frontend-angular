import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    constructor(private dataService:DataService,private router:Router){}
    public error:any="";
    public btn:any="SIGN UP";
    public success:any="";
    Onsubmit(event:Event,name:string,pass:string,cpass:string)
    { 
       event.preventDefault();
       this.btn="PLEASE WAIT.."
       console.log("[+]SIGNUP CALLED");
       if(name==""||pass=="")
       {
         this.error="Please enter name & password";
         setTimeout(() => {
           this.error=""
           this.btn="SIGN UP"
         }, 3000);
         return
       }
       if(pass!=cpass)
        {
          this.error="Confirm password doesn't match!!";
          setTimeout(() => {
            this.error=""
            this.btn="SIGN UP"
          }, 3000);
          return;
        }
       this.dataService.signupbackend(name,pass).subscribe((response:any)=>{
              console.log("RESPONSE FROM BACKEND FOR SIGN UP:",response);
              if(response.error==true)
              {
                 this.error=response.message
                 setTimeout(() => {
                      this.error="";
                    }, 3000);
                 this.btn="SIGN UP";
                  return;
              }
              this.btn="SIGN UP"
              this.success="Account created Successfully. Redirecting....";
              setTimeout(() => {
                this.router.navigate(['/login']);
              }, 3000);
       })
    }
    onFun(text:any)
    {
      console.log("fun");
    }
}
