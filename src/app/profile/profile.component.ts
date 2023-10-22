import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  constructor(private dataService:DataService){}
  public userData:any;
  public imgData:any="";
  public isImg:boolean=false;
  public imgType:any="";
  public selectedFile:any;
  public error:any="";
  //function to fecth data
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
  uploadImage(event:any)
  {
     console.log("File selected--->",event?.target?.files[0]);
     const formData=new FormData();
     formData.append('file',event?.target?.files[0]);
     this.dataService.uploadImage(formData).subscribe((resp:any)=>{
      console.log("RESPONSE FROM BACKEND:::",resp);
      if(resp.error==true)
      {
          this.error=resp.message;
          setTimeout(() => {
             this.error=""
          }, 3000);
          return;
      }
      this.fecthUserData()
     })
  }
}
