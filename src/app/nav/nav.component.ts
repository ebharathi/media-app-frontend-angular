import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    constructor(private dataService:DataService,private router:Router){}
    //function to fecth data
    public userData:any;
    public imgData:any="";
    public isImg:boolean=false;
    public imgType:any="";
    fecthUserData(){
      this.dataService.getUserData().subscribe((resp:any)=>{
          console.log("-->RESPONSE FROM BACKEND FOR USER DETAILS:",resp);
          this.userData=resp.data;
          if(resp.data.img_data!==null){
            this.imgData=resp.data.img_data
            this.isImg=true;
            this.imgType=resp.data.img_mime_type;
          }
      })
    }
  ngOnInit(): void {
       this.fecthUserData()
  }
   public isLoggedIn:boolean=localStorage.getItem('token')?true:false;
  public showDropdown:any=false;
  Logout()
  {
     if(localStorage.getItem('token'))
     localStorage.removeItem('token')
     this.router.navigate(['/']);
  }
   openDropDown()
   {
       this.showDropdown=true;
   }
   closeDropdown()
   {
       this.showDropdown=false;
   }
}
