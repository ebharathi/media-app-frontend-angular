import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import  {Router} from '@angular/router'
@Component({
  selector: 'app-list-channels',
  templateUrl: './list-channels.component.html',
  styleUrls: ['./list-channels.component.css']
})
export class ListChannelsComponent implements OnInit{
   constructor(private dataService:DataService,private router:Router){}
   public isLoggedIn:any=localStorage.getItem('token')?true:false
   public channels:any=[];
   public showDialogBox:any=false;
   public dialogMessage:any="";
   public userData:any;
   fetchAllChannels()
   {
      this.dataService.getAllChannels().subscribe((response:any)=>{
          console.log("BACKEND RESP FOR ALL CHANNNELS--->",response);
          if(response.error==false)
            this.channels=response.channels
      })
   }
   fetchUserData()
   {
      this.dataService.getUserData().subscribe((resp:any)=>{
         if(resp.error==false)
         {
            this.userData=resp.data;
            console.log("USER DATA--->",resp.data);
         }
      })
   }
   ngOnInit(): void {
         this.fetchAllChannels();
         this.fetchUserData();
   }
   JoinChannel(id:any)
   {
      console.log("JOINING CHANNEL NO-",id);
      this.dataService.joinChannel(id).subscribe((response:any)=>{
         console.log("RESPONNSE FROM BACKEND FOR JOINING CHANNL-->",response);  
         if(response.error==false)
           {
            this.router.navigate([`/channel/view/${id}`])
           }
           else{
               this.showDialogBox=true;
               this.dialogMessage=response.message.toUpperCase()
           }
      })
   }
   closeDialog(result:boolean)
   {
      this.showDialogBox=result;
   }
}
