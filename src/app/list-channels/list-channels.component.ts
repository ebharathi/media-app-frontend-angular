import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-list-channels',
  templateUrl: './list-channels.component.html',
  styleUrls: ['./list-channels.component.css']
})
export class ListChannelsComponent implements OnInit{
   constructor(private dataService:DataService){}
   public isLoggedIn:any=localStorage.getItem('token')?true:false
   public channels:any=[];
   fetchAllChannels()
   {
      this.dataService.getAllChannels().subscribe((response:any)=>{
          console.log("BACKEND RESP FOR ALL CHANNNELS--->",response);
          if(response.error==false)
            this.channels=response.channels
      })
   }
   ngOnInit(): void {
         this.fetchAllChannels()
   }
}
